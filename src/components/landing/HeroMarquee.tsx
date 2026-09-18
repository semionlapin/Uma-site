import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  HERO_GAMES_ROW_1,
  HERO_GAMES_ROW_2,
} from '@/data/heroGames';

export interface HeroMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom animation duration in seconds for a full loop.
   * @default 55
   */
  speed?: number;
}

const CARD_WIDTH = 240;
const CARD_HEIGHT = 180;
const CARD_GAP = 12;
const ROW_GAP = 12;
const CARD_RADIUS = 24;
const INNER_MEDIA_RADIUS = 12;
const INNER_PADDING = 12;
// Expanded canvas height to 440px to provide ample headroom (+34px top/bottom) for 3D curved corners
const CANVAS_HEIGHT = 440;

/**
 * Pre-renders an individual game card (white container + rounded cover image)
 * to an offscreen canvas at high resolution.
 */
function createCardOffscreen(
  img: HTMLImageElement,
  dpr: number
): HTMLCanvasElement {
  const offscreen = document.createElement('canvas');
  offscreen.width = Math.round(CARD_WIDTH * dpr);
  offscreen.height = Math.round(CARD_HEIGHT * dpr);

  const ctx = offscreen.getContext('2d');
  if (!ctx) return offscreen;

  ctx.scale(dpr, dpr);

  // 1. Draw outer card background (solid #83728B)
  ctx.fillStyle = '#83728B';
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(0, 0, CARD_WIDTH, CARD_HEIGHT, CARD_RADIUS);
  } else {
    ctx.rect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  }
  ctx.fill();

  // 2. Clip inner media area with rounded corners
  const mediaX = INNER_PADDING;
  const mediaY = INNER_PADDING;
  const mediaW = CARD_WIDTH - INNER_PADDING * 2;
  const mediaH = CARD_HEIGHT - INNER_PADDING * 2;

  ctx.save();
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(mediaX, mediaY, mediaW, mediaH, INNER_MEDIA_RADIUS);
  } else {
    ctx.rect(mediaX, mediaY, mediaW, mediaH);
  }
  ctx.clip();

  // 3. Draw image with object-fit: cover
  const imgW = img.naturalWidth || img.width || mediaW;
  const imgH = img.naturalHeight || img.height || mediaH;
  const imgRatio = imgW / imgH;
  const targetRatio = mediaW / mediaH;

  let sX = 0;
  let sY = 0;
  let sW = imgW;
  let sH = imgH;

  if (imgRatio > targetRatio) {
    sW = imgH * targetRatio;
    sX = (imgW - sW) / 2;
  } else {
    sH = imgW / targetRatio;
    sY = (imgH - sH) / 2;
  }

  ctx.drawImage(img, sX, sY, sW, sH, mediaX, mediaY, mediaW, mediaH);
  ctx.restore();

  return offscreen;
}

// WebGL2 Vertex Shader: Fullscreen quad with UVs
const VERTEX_SHADER_SOURCE = `#version 300 es
in vec2 a_position;
in vec2 a_uv;
out vec2 vUv;

void main() {
  vUv = a_uv;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// WebGL2 Fragment Shader: Pure Canvas UI Cylinder Arc Fold (Zero color tinting/fade in-shader)
const FRAGMENT_SHADER_SOURCE = `#version 300 es
precision highp float;

uniform sampler2D u_texture;
uniform vec2 u_resolution;

in vec2 vUv;
out vec4 fragColor;

const float PI = 3.14159265359;

void main() {
  // Normalized horizontal coordinate u in [-1.0, 1.0]
  float u = (vUv.x - 0.5) * 2.0;
  float absU = abs(u);
  float signU = sign(u);

  // Middle 50% flat; outer zones curve smoothly in a cylindrical arc toward viewer
  float foldStart = 0.50;
  vec2 sampleUv = vUv;

  if (absU > foldStart) {
    float t = (absU - foldStart) / (1.0 - foldStart);

    // Canvas UI cylinder fold parameters
    float angle = 75.0 * (PI / 180.0);
    float currentAngle = t * angle;

    // Cylinder circular arc coordinates (curving toward viewer)
    float R = 0.40;
    float z = (1.0 - cos(currentAngle)) * R;
    
    // Perspective scaling (expanding slightly toward viewer)
    float perspectiveScale = 1.0 + (t * 0.12);

    // Map screen x back to texture arc coordinate
    float mappedOffset = (foldStart * 0.5) + (t * (1.0 - foldStart) * 0.5 / perspectiveScale);
    sampleUv.x = 0.5 + (signU * mappedOffset);

    // Smooth opposing vertical curvature: smooth continuous transition without step tear
    float yDist = vUv.y - 0.5;
    float yCurve = yDist * pow(t, 2.0) * 0.08;
    sampleUv.y = 0.5 + (yDist / perspectiveScale) - yCurve;
  }

  // Discard/transparent outside safe texture sampling bounds to prevent edge clamping artifacts
  if (sampleUv.x < 0.002 || sampleUv.x > 0.998 || sampleUv.y < 0.002 || sampleUv.y > 0.998) {
    fragColor = vec4(0.0);
    return;
  }

  vec4 color = texture(u_texture, sampleUv);

  // Soft sub-pixel boundary feathering at the extreme outer edge
  float edgeX = smoothstep(0.0, 0.004, sampleUv.x) * (1.0 - smoothstep(0.996, 1.0, sampleUv.x));
  float edgeY = smoothstep(0.0, 0.004, sampleUv.y) * (1.0 - smoothstep(0.996, 1.0, sampleUv.y));
  float alpha = color.a * edgeX * edgeY;

  // Output premultiplied alpha so WebGL correctly blends translucent card frames over the dark background
  fragColor = vec4(color.rgb * alpha, alpha);
}
`;

function createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(
  gl: WebGL2RenderingContext,
  vsSource: string,
  fsSource: string
): WebGLProgram | null {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

export const HeroMarquee: React.FC<HeroMarqueeProps> = ({
  className,
  speed = 55,
  ...props
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const webglCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const offscreenCardsRef = React.useRef<Map<string, HTMLCanvasElement>>(
    new Map()
  );
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  // 1. Preload all 14 images and build offscreen textures
  React.useEffect(() => {
    let isCancelled = false;
    offscreenCardsRef.current.clear();
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const allGames = [...HERO_GAMES_ROW_1, ...HERO_GAMES_ROW_2];
    let loadedCount = 0;

    allGames.forEach((game) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = game.image;

      const handleLoad = () => {
        if (isCancelled) return;
        const offscreen = createCardOffscreen(img, dpr);
        offscreenCardsRef.current.set(game.id, offscreen);
        loadedCount++;
        if (loadedCount === allGames.length) {
          setImagesLoaded(true);
        }
      };

      if (img.complete && img.naturalWidth !== 0) {
        handleLoad();
      } else {
        img.onload = handleLoad;
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === allGames.length) {
            setImagesLoaded(true);
          }
        };
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // 2. Setup 2D Marquee Drawing + WebGL2 Cylinder Shader Loop
  React.useEffect(() => {
    const webglCanvas = webglCanvasRef.current;
    const container = containerRef.current;
    if (!webglCanvas || !container || !imagesLoaded) return;

    const gl = webglCanvas.getContext('webgl2', {
      alpha: true,
      antialias: true,
      premultipliedAlpha: true,
    });
    if (!gl) {
      console.warn('WebGL2 not supported, falling back');
      return;
    }

    // Create 2D offscreen canvas where flat marquee rows are drawn
    const offscreen2DCanvas = document.createElement('canvas');
    const ctx2D = offscreen2DCanvas.getContext('2d', { alpha: true });
    if (!ctx2D) return;

    // Compile WebGL2 program & quad geometry
    const program = createProgram(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE);
    if (!program) return;

    gl.useProgram(program);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const uvLocation = gl.getAttribLocation(program, 'a_uv');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const textureLocation = gl.getUniformLocation(program, 'u_texture');

    // Fullscreen quad: 2 triangles (x, y, u, v)
    // Mapping quad y=+1 (top) to uv.y=0 (top of 2D canvas)
    // and quad y=-1 (bottom) to uv.y=1 (bottom of 2D canvas).
    // prettier-ignore
    const quadVertices = new Float32Array([
      -1.0, -1.0,  0.0, 1.0,
       1.0, -1.0,  1.0, 1.0,
      -1.0,  1.0,  0.0, 0.0,
      -1.0,  1.0,  0.0, 0.0,
       1.0, -1.0,  1.0, 1.0,
       1.0,  1.0,  1.0, 0.0,
    ]);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, stride, 0);

    gl.enableVertexAttribArray(uvLocation);
    gl.vertexAttribPointer(
      uvLocation,
      2,
      gl.FLOAT,
      false,
      stride,
      2 * Float32Array.BYTES_PER_ELEMENT
    );

    // WebGL Texture for Offscreen 2D Canvas
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    let animationFrameId: number;
    let width = container.clientWidth || 1192;
    const height = CANVAS_HEIGHT;

    const updateDimensions = () => {
      if (!webglCanvas || !container) return;
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth || 1192;

      // Update WebGL canvas
      webglCanvas.width = Math.floor(width * dpr);
      webglCanvas.height = Math.floor(height * dpr);
      webglCanvas.style.width = `${width}px`;
      webglCanvas.style.height = `${height}px`;

      // Update offscreen 2D canvas
      offscreen2DCanvas.width = Math.floor(width * dpr);
      offscreen2DCanvas.height = Math.floor(height * dpr);
      ctx2D.setTransform(dpr, 0, 0, dpr, 0, 0);

      gl.viewport(0, 0, webglCanvas.width, webglCanvas.height);
      gl.useProgram(program);
      if (resolutionLocation) {
        gl.uniform2f(resolutionLocation, webglCanvas.width, webglCanvas.height);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(container);

    const singleTrackWidthRow1 =
      HERO_GAMES_ROW_1.length * (CARD_WIDTH + CARD_GAP);
    const singleTrackWidthRow2 =
      HERO_GAMES_ROW_2.length * (CARD_WIDTH + CARD_GAP);

    const durationMs = speed * 1000;
    const speedPxPerMs1 = singleTrackWidthRow1 / durationMs;
    const speedPxPerMs2 = singleTrackWidthRow2 / durationMs;

    // Center the 2 card rows (372px total height) inside the 440px canvas
    const row1Y = (height - (CARD_HEIGHT * 2 + ROW_GAP)) / 2;
    const row2Y = row1Y + CARD_HEIGHT + ROW_GAP;

    const render = (timestamp: number) => {
      // 1. Draw 2D Marquee onto offscreen canvas
      ctx2D.clearRect(0, 0, width, height);

      const offset1 = (timestamp * speedPxPerMs1) % singleTrackWidthRow1;
      const offset2 = (timestamp * speedPxPerMs2) % singleTrackWidthRow2;

      // Draw Row 1 (Translating Left)
      const startX1 = -offset1;
      const minRep1 = Math.floor((-singleTrackWidthRow1 - startX1) / singleTrackWidthRow1) - 1;
      const maxRep1 = Math.ceil((width + singleTrackWidthRow1 - startX1) / singleTrackWidthRow1) + 1;

      for (let rep = minRep1; rep <= maxRep1; rep++) {
        const baseTrackX = startX1 + rep * singleTrackWidthRow1;
        HERO_GAMES_ROW_1.forEach((game, idx) => {
          const cardX = baseTrackX + idx * (CARD_WIDTH + CARD_GAP);
          if (cardX + CARD_WIDTH >= -40 && cardX <= width + 40) {
            const offscreen = offscreenCardsRef.current.get(game.id);
            if (offscreen) {
              ctx2D.drawImage(offscreen, cardX, row1Y, CARD_WIDTH, CARD_HEIGHT);
            }
          }
        });
      }

      // Draw Row 2 (Translating Right)
      const startX2 = offset2;
      const minRep2 = Math.floor((-singleTrackWidthRow2 - startX2) / singleTrackWidthRow2) - 1;
      const maxRep2 = Math.ceil((width + singleTrackWidthRow2 - startX2) / singleTrackWidthRow2) + 1;

      for (let rep = minRep2; rep <= maxRep2; rep++) {
        const baseTrackX = startX2 + rep * singleTrackWidthRow2;
        HERO_GAMES_ROW_2.forEach((game, idx) => {
          const cardX = baseTrackX + idx * (CARD_WIDTH + CARD_GAP);
          if (cardX + CARD_WIDTH >= -40 && cardX <= width + 40) {
            const offscreen = offscreenCardsRef.current.get(game.id);
            if (offscreen) {
              ctx2D.drawImage(offscreen, cardX, row2Y, CARD_WIDTH, CARD_HEIGHT);
            }
          }
        });
      }

      // 2. Upload offscreen 2D canvas to WebGL2 Texture
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        offscreen2DCanvas
      );

      // 3. Render WebGL2 Quad with pure Cylinder Bend Shader
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.bindVertexArray(vao);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      if (textureLocation) {
        gl.uniform1i(textureLocation, 0);
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      gl.deleteTexture(texture);
      gl.deleteBuffer(vbo);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, [imagesLoaded, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'w-full flex items-center justify-center overflow-hidden relative select-none bg-surface-accent-1-tertiary',
        className
      )}
      {...props}
    >
      {/* HTML/CSS Lateral Edge Gradient Fade Overlays covering the 3D cylinder fold region */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 lg:w-56 bg-gradient-to-r from-surface-accent-1-tertiary via-surface-accent-1-tertiary/70 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 lg:w-56 bg-gradient-to-l from-surface-accent-1-tertiary via-surface-accent-1-tertiary/70 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      <canvas
        ref={webglCanvasRef}
        className="block max-w-full pointer-events-none bg-surface-accent-1-tertiary"
        style={{ height: `${CANVAS_HEIGHT}px` }}
        aria-label="Интерактивная 3D карусель игровых механик"
        role="img"
      />
    </div>
  );
};

export default HeroMarquee;
