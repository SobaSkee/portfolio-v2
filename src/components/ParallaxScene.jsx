import React, { useEffect, useRef, useState } from "react";
import "./ParallaxScene.css";
import city1 from "../assets/home/1-vector.svg";
import city2 from "../assets/home/2.png";
import city3 from "../assets/home/3.png";
import city4 from "../assets/home/4.png";
import city5 from "../assets/home/5.png";
import city6 from "../assets/home/6.png";
import street from "../assets/home/8-vector.svg";
import porscheBody from "../assets/home/difference.svg";
import porscheWheel from "../assets/home/wheel.png";
import fog from "../assets/home/fog.svg";
import sunRays from "../assets/home/sun-rays.png";
import KirbyAnimation from "./KirbyAnimation";
import Resume from "../assets/Stanley_Ke_Resume_May_2025.pdf";
import brakePedal from "../assets/home/brake-pedal.svg";
import gasPedal from "../assets/home/gas-pedal.svg";
import fogDivider from "../assets/fog-divider.png";

const ParallaxScene = () => {
    const sceneRef = useRef(null);
    const [isMediumScreen, setIsMediumScreen] = useState(
        window.innerWidth >= 768
    );
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const parallaxEls = sceneRef.current.querySelectorAll(".parallax");
        let xValue = 0;
        let yValue = 0;
        let rotateDegree = 0;

        const update = (cursorX) => {
            parallaxEls.forEach((el) => {
                const speedx = parseFloat(el.dataset.speedx);
                const speedy = parseFloat(el.dataset.speedy);
                const speedz = parseFloat(el.dataset.speedz);
                const rotation = parseFloat(el.dataset.rotation);

                const elLeft = parseFloat(getComputedStyle(el).left);
                const isInLeft = elLeft < window.innerWidth / 2 ? 1 : -1;
                const zValue = (cursorX - elLeft) * isInLeft * 0.1;

                el.style.transform = `
                translateX(calc(-50% + ${-xValue * speedx}px))
                translateY(calc(-50% + ${yValue * speedy}px))
                perspective(1000px)
                translateZ(${zValue * speedz}px)
                rotateY(${rotateDegree * rotation}deg)
                `;
            });
        };

        const handleMove = (clientX, clientY) => {
            xValue = clientX - window.innerWidth / 2;
            yValue = clientY - window.innerHeight / 2;
            rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
            update(clientX);
        };

        const handleMouseMove = (e) => {
            handleMove(e.clientX, e.clientY);
        };

        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            handleMove(touch.clientX, touch.clientY);
        };

        update(0);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <main ref={sceneRef} className="h-screen w-full" id="home">
            {/* Example city layers */}
            <img src={sunRays} className="sun-rays" alt="sun rays" />
            <img
                src={city1}
                className="parallax city-1"
                data-speedx="0.05"
                data-speedy="0"
                data-speedz="0"
                data-rotation="0"
                alt="city 1"
            />
            <img
                src={city2}
                className="parallax city-2"
                data-speedx="0.01"
                data-speedy="0.02"
                data-speedz="0.02"
                data-rotation="0.1"
                alt="city 2"
            />
            <img
                src={fog}
                className="parallax fog"
                data-speedx="0"
                data-speedy="0.04"
                data-speedz="0.02"
                data-rotation="0.03"
                alt="fog"
            />
            <div
                className={`kirby -translate-x-1/2 -translate-y-1/2 w-40 md:w-64 hover:cursor-pointer hover:scale-105 hover:rotate-8 transition-all duration-300`}
            >
                <KirbyAnimation />
            </div>
            <div
                className={`text-city flex flex-col ${
                    isMediumScreen ? "parallax" : ""
                } max-w-5xl items-end`}
                data-speedx="0.05"
                data-speedy="0.1"
                data-speedz="0.03"
                data-rotation="0.04"
            >
                <div className="nes-balloon from-left w-full">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl md:text-6xl">Hi!</h2>
                        <h1 className="text-2xl md:text-4xl">I'm Stanley</h1>
                    </div>
                </div>
                <div className="socials w-fit bg-white !p-4 nes-container is-rounded flex flex-col items-center justify-center gap-2">
                    {/* buttons with my links to github, linkedin, and resume */}
                    <div className="flex flex-row justify-center gap-2 md:gap-4">
                        <a
                            href="https://www.github.com/SobaSkee"
                            target="_blank"
                        >
                            <i
                                className={`nes-icon github ${
                                    isMediumScreen ? "is-large" : "i"
                                }`}
                            ></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/stanley-ke/"
                            target="_blank"
                        >
                            <i
                                className={`nes-icon linkedin ${
                                    isMediumScreen ? "is-large" : ""
                                }`}
                            ></i>
                        </a>
                        <a
                            href="mailto:stanleyke.jobs@gmail.com"
                            target="_blank"
                        >
                            <i
                                className={`nes-icon gmail ${
                                    isMediumScreen ? "is-large" : ""
                                }`}
                            ></i>
                        </a>
                    </div>
                    <a
                        href={Resume}
                        className="nes-btn is-primary w-full text-xs md:text-xl"
                        target="_blank"
                    >
                        Resume
                    </a>
                </div>
            </div>

            <img
                src={city3}
                className="parallax city-3"
                data-speedx="0.03"
                data-speedy="0.04"
                data-speedz="0.1"
                data-rotation="0.15"
                alt="city 3"
            />
            <img
                src={city4}
                className="parallax city-4"
                data-speedx="0.03"
                data-speedy="0.02"
                data-speedz="0.09"
                data-rotation="0.1"
                alt="city 4"
            />
            <img
                src={city5}
                className="parallax city-5"
                data-speedx="0.05"
                data-speedy="0.02"
                data-speedz="0.09"
                data-rotation="0.08"
                alt="city 5"
            />
            <img
                src={city6}
                className="parallax city-6"
                data-speedx="0.05"
                data-speedy="0.005"
                data-speedz="0.01"
                data-rotation="0.08"
                alt="city 6"
            />
            {isMediumScreen ? (
                <div
                    className={`street ${isPaused ? "paused" : ""}`}
                    style={{ backgroundImage: `url(${street})` }}
                ></div>
            ) : (
                <img
                    src={street}
                    className={`street-img ${
                        isPaused ? "paused" : ""
                    }`}
                    alt="street"
                />
            )}

            <div className="porsche">
                <img
                    src={porscheBody}
                    className="porsche-body"
                    alt="porsche body"
                />
                <img
                    src={porscheWheel}
                    className={`porsche-left-wheel ${isPaused ? "paused" : ""}`}
                    alt="porsche leftwheel"
                />
                <img
                    src={porscheWheel}
                    className={`porsche-right-wheel ${
                        isPaused ? "paused" : ""
                    }`}
                    alt="porsche right wheel"
                />
            </div>
            {isMediumScreen ? (
                <div className="pedals">
                    <img
                        src={brakePedal}
                    className="brake-pedal"
                    alt="brake pedal"
                    onClick={() => setIsPaused(true)}
                />
                <img
                    src={gasPedal}
                    className="gas-pedal"
                    alt="gas pedal"
                        onClick={() => setIsPaused(false)}
                    />
                </div>
            ) : null}
            {/* <img src={fogDivider} alt="fog-divider" className="z-8 absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600%] max-w-none h-30" /> */}
        </main>
    );
};

export default ParallaxScene;
