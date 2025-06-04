import React, { useEffect, useRef, useState } from "react";
import "./ParallaxScene.css";
import city1 from "../assets/city/1-vector.svg";
import city2 from "../assets/city/2.png";
import city3 from "../assets/city/3.png";
import city4 from "../assets/city/4.png";
import city5 from "../assets/city/5.png";
import city6 from "../assets/city/6.png";
import street from "../assets/city/8-vector.svg";
import porscheBody from "../assets/city/difference.svg"
import porscheWheel from "../assets/city/wheel.png"
import fog from "../assets/city/fog.svg"
import sunRays from "../assets/city/sun-rays.png"
import KirbyAnimation from "./KirbyAnimation";

const ParallaxScene = () => {
    const sceneRef = useRef(null);

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

        const handleMouseMove = (e) => {
            xValue = e.clientX - window.innerWidth / 2;
            yValue = e.clientY - window.innerHeight / 2;
            rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
            update(e.clientX);
        };

        update(0);
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    

    return (
        <main ref={sceneRef} className="h-screen" id="home">
            {/* Example city layers */}
            <img
                src={sunRays}
                className="sun-rays"
                alt="sun rays"
            />
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 z-100 hover:cursor-pointer hover:scale-105 hover:rotate-8 transition-all duration-300">
                <KirbyAnimation />
            </div>

            <div
                className="text-city parallax nes-balloon from-left width-[300px] md:width-[500px]"
                data-speedx="0.05"
                data-speedy="0.1"
                data-speedz="0.03"
                data-rotation="0.04"
            >
                <h2 className="text-[#F8A5C2;] text-3xl md:text-6xl">Hi!</h2>
                <h1 className="text-[#F8A5C2;] text-2xl md:text-4xl">I'm Stanley</h1>
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
                data-speedx="0.02"
                data-speedy="0.005"
                data-speedz="0.01"
                data-rotation="0.08"
                alt="city 6"
            />
            <div className="street" style={{ backgroundImage: `url(${street})` }}>
            </div>
            <div className="porsche">
                <img src={porscheBody} className="porsche-body" alt="porsche body" />
                <img src={porscheWheel} className="porsche-left-wheel" alt="porsche wheel" />
                <img src={porscheWheel} className="porsche-right-wheel" alt="porsche wheel" />
                
            </div>
        </main>
    );
};

export default ParallaxScene;
