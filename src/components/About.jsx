import React, { useState } from "react";
import aboutBg from "../assets/ui/about-me-bg.svg";
import boatsPixel from "../assets/ui/boats-pixel.svg";
import boatsJpg from "../assets/ui/boats.jpg";
import close from "../assets/ui/menu-close.svg";

const About = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="relative h-screen" id="about">
            <img
                src={aboutBg}
                alt="about background"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute right-10 top-85 -translate-y-1/2 flex flex-col items-center justify-center max-w-lg">
                <h1 className="text-white text-2xl font-bold">
                    A little about me
                </h1>
                <div className="flex flex-col items-center justify-center nes-container is-rounded bg-[#1A1A2E]">
                    <p className="text-white text-lg">
                        I'm an aspiring software engineer with a passion for
                        building web applications.
                        <br />
                        <br />
                        As I enter my third year of university I hope to gain
                        more expereince in full stack development and learn new
                        technologies.
                        <br />
                        <br />
                        In my free time I enjoy playing pickleball.
                    </p>
                </div>
            </div>
            <div 
                className="absolute top-30 left-140 w-55 hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setIsPopupOpen(true)}
            >
                <img src={boatsPixel} alt="about me" className="w-55" />
            </div>

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            className="absolute -top-15 right-0 text-white text-2xl hover:text-gray-300"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            <img src={close} alt="close" className="w-10 h-10" />
                        </button>
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
