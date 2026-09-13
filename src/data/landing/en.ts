import type { LandingContent } from './types';

export const enContent: LandingContent = {
  header: {
    navItems: [
      { label: 'Games', href: '#games' },
      { label: 'Templates', href: '#templates' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Help', href: '#help' },
    ],
    ctaLabel: 'Sign In',
    currentLang: 'EN',
  },
  hero: {
    badge: 'AI Quest Generation — Available Now',
    title: 'Turn every lesson into a ',
    titleHighlight: 'game!',
    description:
      'Interactive games for your classroom. Perfect for tablets, smartboards, and inclusive learning.',
    primaryCta: 'Create Game',
    secondaryCta: 'Find Ready-Made Game',
    secondaryCtaCaption: 'Over 12,000 games across all subjects',
  },
  keyFeatures: {
    title: 'Key Features',
    tabs: [
      {
        id: 0,
        label: 'Game Catalog',
        iconKey: 'gamepad',
        steps: [
          {
            step: '01',
            title: 'Find by Subject',
            description:
              'Browse games by school subjects, grade levels, and topics.',
            url: 'www.umaigra.com/catalog',
            graphicKey: 'CreateGame01',
          },
          {
            step: '02',
            title: 'Preview the Game',
            description:
              'Launch instant previews to inspect mechanics and content before class.',
            url: 'www.umaigra.com/preview',
            graphicKey: 'CreateGame01',
          },
          {
            step: '03',
            title: 'Play in Class',
            description:
              'Share a direct link or PIN code for students to join immediately.',
            url: 'www.umaigra.com/play',
            graphicKey: 'CreateGame01',
          },
        ],
      },
      {
        id: 1,
        label: 'Game Editor',
        iconKey: 'pencil',
        steps: [
          {
            step: '01',
            title: 'Choose a Template',
            description:
              'Find the right game mechanics in the library for your learning goals: quizzes, flashcards, matching pairs, or tournaments.',
            url: 'www.umaigra.com/templates',
            graphicKey: 'CreateGame01',
          },
          {
            step: '02',
            title: 'Add Your Content',
            description:
              'Add questions, answer choices, illustrations, and hints in a few clicks or select from pre-made sets.',
            url: 'www.umaigra.com/editor',
            graphicKey: 'CreateGame01',
          },
          {
            step: '03',
            title: 'Launch Live Game',
            description:
              'Students join instantly from phones or laptops using a simple PIN code without complicated signups.',
            url: 'www.umaigra.com/play/live',
            graphicKey: 'CreateGame01',
          },
        ],
      },
      {
        id: 2,
        label: 'AI Content',
        iconKey: 'sparkles',
        steps: [
          {
            step: '01',
            title: 'Enter Lesson Topic',
            description:
              'Type a topic, curriculum standard, or paste textbook content for instant generation.',
            url: 'www.umaigra.com/ai/prompt',
            graphicKey: 'GenerateGame01',
          },
          {
            step: '02',
            title: 'AI Builds Quests & Quizzes',
            description:
              'AI generates balanced questions, answers, and adaptive hints in seconds.',
            url: 'www.umaigra.com/ai/generate',
            graphicKey: 'GenerateGame02',
          },
          {
            step: '03',
            title: 'Fine-tune and Publish',
            description:
              'Review questions, adjust settings, and launch the ready game with your students.',
            url: 'www.umaigra.com/ai/publish',
            graphicKey: 'GenerateGame03',
          },
        ],
      },
      {
        id: 3,
        label: 'Monetization',
        iconKey: 'sprout',
        steps: [
          {
            step: '01',
            title: 'Create Author Collection',
            description:
              'Package your best lessons and interactive games into premium didactic sets.',
            url: 'www.umaigra.com/creator/new',
            graphicKey: 'SellGame01',
          },
          {
            step: '02',
            title: 'Set Price & Access',
            description:
              'Choose subscription or one-time access pricing for colleagues and parents.',
            url: 'www.umaigra.com/creator/pricing',
            graphicKey: 'SellGame02',
          },
          {
            step: '03',
            title: 'Earn & Withdraw',
            description:
              'Receive revenue directly to your preferred payment method and grow your teaching brand.',
            url: 'www.umaigra.com/creator/payout',
            graphicKey: 'SellGame03',
          },
        ],
      },
    ],
    moreTitle: 'And more...',
    uspCards: [
      {
        title: 'Live Tournaments & Analytics',
        description: 'Host thrilling competitions directly in class or online!',
        iconKey: 'activity',
      },
      {
        title: 'Smartboard Tools',
        description: 'Turn your interactive whiteboard into the classroom centerpiece.',
        iconKey: 'presentation',
      },
      {
        title: 'Inclusivity & Accessibility (SEN)',
        description: 'Umaigra is designed so every child feels capable and successful.',
        iconKey: 'smile',
      },
    ],
  },
  audience: {
    titlePrefix: 'Umaigra',
    titleSuffix: 'is for everyone',
    teachers: {
      title: 'For Teachers',
      description:
        'Save up to 5 hours a week on lesson prep. Share materials with colleagues or monetize your original lesson packs and methodologies.',
      imageSrc: '/images/sections/ForTeachers.webp',
      imageAlt: 'Teacher conducting a lesson',
      pills: [
        {
          title: 'Save Your Time',
          description: 'Save up to 5 hours a week on lesson prep',
          iconKey: 'hourglass',
        },
        {
          title: 'Share with Colleagues',
          description: 'Exchange ready-made teaching kits with peers',
          iconKey: 'book',
        },
        {
          title: 'Monetize Knowledge',
          description: 'Earn from original lessons and educational collections',
          iconKey: 'sprout',
        },
      ],
    },
    students: {
      title: 'For Students',
      description:
        'Learning without stress or boredom. Personal dashboard with visible progress, participation in class tournaments, and adaptive modes for comfortable learning.',
      imageSrc: '/images/sections/ForStudents.webp',
      imageAlt: 'Children learning at an interactive panel',
      pills: [
        {
          title: 'Live Tournaments',
          description: 'Participate in live tournaments and whiteboard games',
          iconKey: 'gamepad',
        },
        {
          title: 'Track Progress',
          description: 'Visual personal progress and achievements',
          iconKey: 'star',
        },
        {
          title: 'Pressure-Free Learning',
          description: 'Learn without stress or fear of making mistakes',
          iconKey: 'wand',
        },
      ],
    },
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How do I share a game link?',
        answer:
          'After creating a game in the editor, simply click "Share". You will get a unique PIN code and direct link or QR code that students can use to join instantly from any device without registration.',
      },
      {
        question: 'How can I rate games made by other authors?',
        answer:
          'In the game catalog, you can preview any game, inspect questions and mechanics, and leave a rating with feedback for the author.',
      },
      {
        question: 'What features unlock after registration?',
        answer:
          'Free registration unlocks game saving to your personal dashboard, student result tracking, custom quest creation, and author ranking participation.',
      },
    ],
    cta: {
      primaryCta: 'Create Your Account',
      primaryCtaCaption: 'Takes less than a minute.',
      secondaryCta: 'Try Without Registration',
    },
  },
  footer: {
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Pricing Plans', href: '#pricing' },
      { label: 'Help & Support', href: '#help' },
    ],
  },
};
