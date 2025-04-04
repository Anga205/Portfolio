import {DesktopView} from "./DesktopView"
import MobileView from "./MobileView"
import { useState, useEffect, useRef } from 'react'

function App({ projects }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    const handlePrint = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault(); // Stop the default print behavior

        // Load the PDF into an iframe and trigger print
        const iframe = document.createElement("iframe");
        iframe.style.position = "absolute";
        iframe.style.width = "0px";
        iframe.style.height = "0px";
        iframe.style.border = "none";
        iframe.src = "/resume.pdf";
        iframe.onload = () => {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        };

        document.body.appendChild(iframe);

        // Remove the iframe after printing
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 2000);
      }
    };

    window.addEventListener("keydown", handlePrint);
    return () => {
      window.removeEventListener("keydown", handlePrint);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <iframe ref={iframeRef} style={{ display: "none" }} />
      {isDesktop ? (
        <DesktopView projects={projects} />
      ) : (
        <MobileView projects={projects} />
      )}
    </>
  );
}

export default App
