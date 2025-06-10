import React, { useState } from "react";
import aboutBgLeft from "../assets/about/about-me-bg-left.jpg";
import aboutBgRight from "../assets/about/about-me-bg-right.jpg";
import boatsPixel from "../assets/about/boats-pixel.svg";
import boatsJpg from "../assets/about/boats.jpg";
import close from "../assets/ui/menu-close.svg";

const About = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div
            className="relative h-screen min-h-screen flex flex-col md:flex-row"
            id="about"
        >
            <div className="relative w-full md:w-1/2 h-full">
                <img
                    src={aboutBgLeft}
                    alt="about background left"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                    className="z-2 absolute top-20 right-5 md:top-28 md:-right-10 w-20 md:w-55 hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={() => setIsPopupOpen(true)}
                >
                    <img src={boatsPixel} alt="about me" className="w-55" />
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 h-full">
                <img
                    src={aboutBgRight}
                    alt="about background right"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="flex flex-col items-center justify-center max-w-xs md:max-w-lg">
                    <div className="flex flex-col items-center justify-center nes-container with-title bg-white">
                        <p className="title text-[#F8A5C2] !text-lg md:!text-2xl border-2">
                            About me
                        </p>
                        <p className="text-xs md:text-base">
                        Hi, I’m Stanley Ke — a full stack developer with a curiosity for clever design and creative problem-solving.
                            <br />
                            <br />
                            Heading into my third year of university, I’m eager to dive deeper into real-world projects, expand my toolkit, and contribute meaningfully through a hands-on internship.
                            <br />
                            <br />
                            When I’m not coding or on my computer, you’ll find me on the local pickleball courts.
                        </p>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-white text-2xl hover:text-gray-300"
                        onClick={() => setIsPopupOpen(false)}
                    >
                        <img src={close} alt="close" className="w-15" />
                    </button>
                    <div className="relative">
                        <img
                            src={boatsJpg}
                            alt="boats full size"
                            className="max-h-[60vh] max-w-[60vw] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
