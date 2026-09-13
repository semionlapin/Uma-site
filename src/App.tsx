import { useState, useEffect } from 'react';
import { LandingPage } from '@/pages/LandingPage';
import { KitchenSink } from '@/pages/KitchenSink';

function App() {
  const [currentRoute, setCurrentRoute] = useState<'landing' | 'kitchen-sink'>(() => {
    const hash = window.location.hash;
    const pathname = window.location.pathname;
    if (hash === '#kitchen-sink' || pathname === '/kitchen-sink') {
      return 'kitchen-sink';
    }
    return 'landing';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;
      if (hash === '#kitchen-sink' || pathname === '/kitchen-sink') {
        setCurrentRoute('kitchen-sink');
      } else {
        setCurrentRoute('landing');
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return currentRoute === 'kitchen-sink' ? <KitchenSink /> : <LandingPage />;
}

export default App;
