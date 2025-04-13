import { useState, useEffect, useRef } from "react";
import darkModeIcon from "../assets/icons/dark-mode.svg";
import lightModeIcon from "../assets/icons/light-mode.svg";
import { BurgerOpen, BurgerClose } from "./icons";
import ContactForm from "./ContactForm";

const NavBar = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  });
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [burgerIcon, setBurgerIcon] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDarkMode]);

  const updateSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleNavItemClick = (navItemId) => {
    setActiveNavItem(navItemId);
    setShowBurgerMenu(false);
    setBurgerIcon(false);
    closeModal();
  };

  const handleBurgerClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
    setBurgerIcon(!showBurgerMenu);
  };

  const openModal = () => {
    setIsOpen(true);
    setShowBurgerMenu(!showBurgerMenu);
    setBurgerIcon(!showBurgerMenu);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-10 hidden h-20 w-full items-center justify-between bg-white/75 px-4 backdrop-blur-xl dark:bg-gray-950/75 md:flex md:justify-around">
        <div>
          <a
            href="#"
            aria-label="Return to the top of the homepage"
            onClick={() => handleNavItemClick(null)}
            className="select-none font-krona text-3xl dark:text-gray-50"
          >
            Bingo
          </a>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex gap-5 text-gray-600 dark:text-gray-300">
            <a
              href="#articles"
              aria-label="Check my articles"
              onClick={() => handleNavItemClick("1")}
              className={`scroll-smooth rounded-xl px-3 py-2 duration-200 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-50 ${activeNavItem === "1" ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50" : ""}`}
            >
              Articles
            </a>
            <a
              href="#projects"
              aria-label="Check my projects"
              onClick={() => handleNavItemClick("2")}
              className={`scroll-smooth rounded-xl px-3 py-2 duration-200 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-50 ${activeNavItem === "2" ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50" : ""}`}
            >
              Projects
            </a>
            <a
              href="#stacks"
              aria-label="Check the tech stacks im using"
              onClick={() => handleNavItemClick("3")}
              className={`scroll-smooth rounded-xl px-3 py-2 duration-200 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-50 ${activeNavItem === "3" ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50" : ""}`}
            >
              Stacks
            </a>
          </nav>
          <hr className="w-6 rotate-90 dark:border-gray-500" />
          <div className="flex items-center gap-5">
            <button
              aria-label="Light/Dark mode toggle button"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <img
                src={isDarkMode ? darkModeIcon : lightModeIcon}
                alt="Light or Dark mode button icon"
              />
            </button>
            <button
              aria-label="Contact me button to open contact form"
              onClick={openModal}
              className="rounded-xl bg-gray-900 px-5 py-2 text-gray-50 duration-200 hover:bg-gray-300 hover:text-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-50"
            >
              Contact Me
            </button>
          </div>
        </div>
        {successMessage && (
          <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 translate-y-20 transform items-center rounded-lg border-2 border-green-500 bg-white/80 px-4 py-5 text-green-500 backdrop-blur-lg  dark:border-none dark:bg-green-500/80 dark:text-gray-50">
            <p>{successMessage}</p>
          </div>
        )}
      </header>
      <header className="fixed top-0 z-20 w-full bg-white/75 backdrop-blur-xl dark:bg-gray-950/75 md:hidden">
        <div className="flex h-20 items-center justify-between px-5">
          <div>
            <a
              href="#"
              aria-label="Return to the top of the homepage"
              onClick={() => handleNavItemClick(null)}
              className="select-none font-krona text-3xl dark:text-gray-50"
            >
              Bingo
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              aria-label="Light/Dark mode toggle button"
              onClick={handleBurgerClick}
              className="focus:outline-hidden"
            >
              {burgerIcon ? <BurgerClose /> : <BurgerOpen />}
            </button>
          </div>
          {successMessage && (
            <div className="absolute bottom-0 left-1/2 z-50 flex w-max -translate-x-1/2 translate-y-14 transform items-center rounded-lg border-2 border-green-500 bg-white/90 px-2 py-3 text-center text-green-500 backdrop-blur-lg  dark:border-none dark:bg-green-500/80 dark:text-gray-50">
              <p>{"Message sent with success !"}</p>
            </div>
          )}
        </div>
        <div
          className={`flex w-full flex-col shadow-md transition-all duration-300 ${showBurgerMenu ? "opacity-100" : "pointer-events-none hidden opacity-0"}`}
        >
          <div className="flex w-full p-5" ref={modalRef}>
            <div className="flex w-1/2">
              <nav className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
                <a
                  href="#articles"
                  aria-label="Check my articles"
                  onClick={() => {
                    handleNavItemClick("1");
                  }}
                  className="py-2"
                >
                  Articles
                </a>
                <a
                  href="#projects"
                  aria-label="Check my projects"
                  onClick={() => {
                    handleNavItemClick("2");
                  }}
                  className="py-2"
                >
                  Projects
                </a>
                <a
                  href="#stacks"
                  aria-label="Check the tech stacks im using"
                  onClick={() => {
                    handleNavItemClick("3");
                  }}
                  className="py-2"
                >
                  Stacks
                </a>
                <button
                  aria-label="Contact me button to open contact form"
                  onClick={openModal}
                  className="rounded-xl bg-gray-900 px-5 py-2 text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-50"
                >
                  Contact Me
                </button>
              </nav>
            </div>
            <div className="flex w-1/2 items-end justify-end pb-2">
              <button
                aria-label="Light/Dark mode toggle button"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <img
                  src={isDarkMode ? darkModeIcon : lightModeIcon}
                  alt="Light or Dark mode button icon"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      {modalIsOpen && (
        <div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center backdrop-blur-xl">
          <div
            className="absolute left-1/2 top-1/2 w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/75 p-6 shadow-md backdrop-blur-xl dark:bg-gray-950/75 dark:shadow-gray-500/10"
            ref={modalRef}
          >
            <div className="flex flex-col">
              <div className="mb-4 flex justify-between">
                <h2 className="text-xl font-semibold dark:text-gray-50">
                  Contact Me
                </h2>
                <button aria-label="Close mobile menu" onClick={closeModal}>
                  <BurgerClose />
                </button>
              </div>
              <ContactForm
                updateSuccessMessage={updateSuccessMessage}
                closeModal={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
