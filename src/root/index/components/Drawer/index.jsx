import { createSignal, onCleanup, onMount } from "solid-js";

const DrawerButton = ({ title, link = "#", newPage = false }) => {
  return (
    <a href={link} className="text-white no-underline my-2 text-lg" target={newPage ? "_blank" : "_self"}>
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
    document.addEventListener("click", handleClickOutside, true);
  });

  onCleanup(() => {
    window.removeEventListener("touchstart", handleTouchStart);
    document.removeEventListener("click", handleClickOutside, true);
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
      <div className="flex w-full items-center justify-between p-2 px-3">
        <button onClick={toggleDrawer} className="bg-none border-none text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M3 12h12M3 6h18M3 18h6"/>
          </svg>
        </button>
        <img
          src="/anga.svg"
          className="w-10"
        />
      </div>
      <div className={`fixed top-0 left-0 w-64 h-full bg-black bg-opacity-90 text-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen() ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="flex flex-col h-full justify-between py-10">
          <div className="flex items-center justify-center space-x-4">
            <img src="/anga.svg" className="w-1/4" />
            <h1 className="text-2xl font-extrabold">Anga</h1>
          </div>
          <div className="flex flex-col space-y-2 pb-[100%] w-full">
            {ButtonList.map((button) => (
              <DrawerButton key={button.title} title={button.title} link={button.link} newPage={button.newPage} />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Drawer;
