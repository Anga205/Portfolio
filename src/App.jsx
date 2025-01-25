import {DesktopView} from "./DesktopView"
import MobileView from "./MobileView"
import { useState, useEffect } from 'react'

function App({ projects }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <DesktopView projects={projects} />
      ) : (
        <MobileView projects={projects} />
      )}
    </>
  );
}

export default App
