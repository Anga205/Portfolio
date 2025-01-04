import { createSignal, onCleanup, onMount } from "solid-js";
import "./drawer.css";

const DrawerButton = ({ title, link = "#", newPage = false }) => {
  return (
    <a href={link} className="drawer-link" target={newPage ? "_blank" : "_self"}>
      <button className="w-full hover:bg-gray-800 p-3">
        {title}
      </button>
    </a>
  );
};

const Drawer = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen());
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchMove = (e) => {
      const touchEndX = e.touches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        setIsOpen(false);
      } else if (touchEndX - touchStartX > 50) {
        setIsOpen(true);
      }
    };

    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleClickOutside = (e) => {
    if (isOpen() && !e.target.closest('.drawer')) {
      setIsOpen(false);
    }
  };

  onMount(() => {
    window.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("click", handleClickOutside);
  });

  onCleanup(() => {
    window.removeEventListener("touchstart", handleTouchStart);
    document.removeEventListener("click", handleClickOutside);
  });

  const ButtonList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Resume",
      link: "/resume.pdf",
      newPage: true,
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <button onClick={toggleDrawer} className="drawer-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M3 12h12M3 6h18M3 18h6"/>
        </svg>
      </button>
      <div className={`drawer ${isOpen() ? "open" : ""}`}>
        <nav className="drawer-nav space-y-0 h-full items-center justify-between py-40">
          <div className="flex items-center justify-center space-x-4">
            <img src="/anga.svg" className="w-1/4" />
            <h1 className="text-2xl font-extrabold">Anga</h1>
          </div>
          <div className="space-y-0 flex flex-col pb-28 w-full">
            {ButtonList.map((button) => (
              <DrawerButton title={button.title} link={button.link} newPage={button.newPage} />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Drawer;