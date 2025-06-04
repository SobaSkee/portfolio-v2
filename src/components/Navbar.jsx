import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuOpen from "../assets/ui/menu-open.svg";
import menuClose from "../assets/ui/menu-close.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full  backdrop-blur-lg z-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="!text-white text-md font-light">
                            SK Portfolio
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex gap-2">
                            <a
                                href="#about"
                                className="text-gray-300 hover:text-white px-0 py-2 rounded-md text-sm font-medium"
                            >
                                <button className="nes-btn is-blush">
                                    About
                                </button>
                            </a>
                            <Link
                                to="/"
                                className="text-gray-300 hover:text-white px-0 py-2 rounded-md text-sm font-medium"
                            >
                                <button className="nes-btn is-blush">
                                    Contact
                                </button>
                            </Link>

                            <Link
                                to="/"
                                className="text-gray-300 hover:text-white px-0 py-2 rounded-md text-sm font-medium"
                            >
                                <button className="nes-btn is-blush">
                                    Projects
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <img src={menuOpen} alt="menu" />
                            ) : (
                                <img src={menuClose} alt="menu" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
