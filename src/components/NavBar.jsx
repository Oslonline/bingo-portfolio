import { useState, useEffect } from "react";
import darkModeIcon from "../assets/icons/dark-mode.svg";
import lightModeIcon from "../assets/icons/light-mode.svg";
import { BurgerOpen, BurgerClose } from "./icons";

const NavBar = () => {
    const [activeNavItem, setActiveNavItem] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        return savedDarkMode ? JSON.parse(savedDarkMode) : true;
    });
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const [burgerIcon, setBurgerIcon] = useState(false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        closeModal();
    };

    return (
        <>
            <header className="sticky top-0 z-10 hidden h-20 w-full items-center justify-between bg-white/75 px-4 backdrop-blur-xl dark:bg-gray-950/75 md:flex md:justify-around">
                <div>
                    <a href="#" onClick={() => handleNavItemClick(null)} className="select-none font-krona text-3xl dark:text-gray-50">
                        Bingo
                    </a>
                </div>
                <div className="hidden items-center gap-5 md:flex">
                    <nav className="flex gap-5 text-gray-600 dark:text-gray-200">
                        <a href="#articles" onClick={() => handleNavItemClick("1")} className={`scroll-smooth rounded-xl px-3 py-2 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 ${activeNavItem === "1" ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50" : ""}`}>
                            Articles
                        </a>
                        <a href="#projects" onClick={() => handleNavItemClick("2")} className={`scroll-smooth rounded-xl px-3 py-2 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 ${activeNavItem === "2" ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50" : ""}`}>
                            Projects
                        </a>
                        <a href="#stacks" onClick={() => handleNavItemClick("3")} className={`scroll-smooth rounded-xl px-3 py-2 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 ${activeNavItem === "3" ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50" : ""}`}>
                            Stacks
                        </a>
                    </nav>
                    <hr className="w-6 rotate-90 dark:border-gray-500" />
                    <div className="flex items-center gap-5">
                        <button onClick={() => setIsDarkMode(!isDarkMode)}>
                            <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="" />
                        </button>
                        <button onClick={openModal} className="rounded-xl bg-gray-900 px-5 py-2 text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-50">
                            Contact Me
                        </button>
                    </div>
                </div>
            </header>
            <header className="fixed top-0 z-20 w-full bg-white/75 backdrop-blur-xl dark:bg-gray-950/75 md:hidden">
                <div className="flex h-20 items-center justify-between px-5">
                    <div>
                        <a href="#" onClick={() => handleNavItemClick(null)} className="select-none font-krona text-3xl dark:text-gray-50">
                            Bingo
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={handleBurgerClick} className="focus:outline-none ">
                            {burgerIcon ? <BurgerClose /> : <BurgerOpen />}
                        </button>
                    </div>
                </div>
                <div className={`flex w-full flex-col shadow-md transition-all duration-300 ${showBurgerMenu ? "opacity-100" : "pointer-events-none hidden opacity-0"}`}>
                    <div className="flex w-full p-5">
                        <div className="flex w-1/2">
                            <nav className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
                                <a
                                    href="#articles"
                                    onClick={() => {
                                        handleNavItemClick("1");
                                    }}
                                    className="py-2"
                                >
                                    Articles
                                </a>
                                <a
                                    href="#projects"
                                    onClick={() => {
                                        handleNavItemClick("2");
                                    }}
                                    className="py-2"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#stacks"
                                    onClick={() => {
                                        handleNavItemClick("3");
                                    }}
                                    className="py-2"
                                >
                                    Stacks
                                </a>
                                <button onClick={openModal} className="rounded-xl bg-gray-900 px-5 py-2 text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-50">
                                    Contact Me
                                </button>
                            </nav>
                        </div>
                        <div className="flex w-1/2 items-end justify-end pb-2">
                            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                                <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {modalIsOpen && (
                <div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center p-4 backdrop-blur-xl md:mt-20 md:p-0">
                    <div className="w-full max-w-md rounded-lg bg-white/75 p-6 shadow-md backdrop-blur-xl dark:bg-gray-950/75 dark:shadow-gray-100/10">
                        <div className="mb-4 flex justify-between">
                            <h2 className="text-xl font-semibold dark:text-gray-50">Contact Me</h2>
                            <button onClick={closeModal}>
                                <BurgerClose />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="username">
                                    Full Name :
                                </label>
                                <input placeholder="John Doe" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-none dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" name="username" type="text" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="email">
                                    Email :
                                </label>
                                <input placeholder="john.doe@mail.com" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-none dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" name="email" type="email" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="select-none text-sm text-gray-700 dark:text-gray-300" htmlFor="message" required>
                                    Message :
                                </label>
                                <textarea placeholder="I want to talk with you about ....." name="message" className="w-full rounded-lg border border-gray-500 bg-gray-50 p-2 focus:border-gray-900 focus:outline-none dark:border-transparent dark:bg-gray-700 dark:text-gray-50 dark:caret-white dark:focus:border dark:focus:border-gray-300" rows="7"></textarea>
                            </div>
                            <button type="submit" className="rounded-lg bg-gray-900 px-4 py-2  text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-50">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
