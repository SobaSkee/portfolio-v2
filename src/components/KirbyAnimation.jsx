import React, { useState, useEffect, useRef } from "react";
import kirbyClosed from "../assets/city/kirby-closed.svg";
import kirbyMid from "../assets/city/kirby-ready.svg";
import kirbyOpen from "../assets/city/kirby-open.svg";
import fakeCursor from "../assets/city/cursor.png";
import { gsap } from "gsap";

const KirbyAnimation = () => {
    const [kirbyStage, setKirbyStage] = useState("closed"); // "closed" | "mid" | "open"

    const kirbyRef = useRef(null);
    const fakeCursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            console.log("Mouse position:", { x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const lockCursor = () => {
        const el = document.body;
        if (el.requestPointerLock) {
            el.requestPointerLock();
        }
    };

    const unlockCursor = () => {
        if (document.exitPointerLock) {
            document.exitPointerLock();
        }
    };

    useEffect(() => {
        let timeout;

        if (kirbyStage === "mid") {
            timeout = setTimeout(() => {
                setKirbyStage("open");
            }, 1000);
        }

        if (kirbyStage === "open") {
            lockCursor();

            // gsap.fromTo(
            //     kirbyRef.current,
            //     { scale: 0.9, opacity: 0 },
            //     { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
            // );

            const tl = gsap.timeline();

            tl.to(fakeCursorRef.current, {
                x: 100,
                y: 0,
                duration: 0.05,
            });

            tl.to(fakeCursorRef.current, {
                x: "+=5",
                y: "-=5",
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                ease: "power1.inOut",
            });

            tl.to(fakeCursorRef.current, {
                rotation: 720,
                scale: 0.5,
                x: 80,
                y: 60,
                duration: 0.5,
                ease: "power2.in",
            });

            tl.to(fakeCursorRef.current, {
                rotation: 1440,
                scale: 0.1,
                x: 70,
                y: 90,
                duration: 0.5,
                ease: "back.in(2)",
            });

            timeout = setTimeout(() => {
                unlockCursor();
                setKirbyStage("closed");
            }, 3000);
        }

        return () => clearTimeout(timeout);
    }, [kirbyStage]);

    return (
        <div
            className="relative w-full h-full"
            onClick={() => {
                if (kirbyStage === "closed") {
                    setKirbyStage("mid");
                }
            }}
        >
            {kirbyStage === "closed" && (
                <img src={kirbyClosed} className="w-full h-full" />
            )}
            {kirbyStage === "mid" && (
                <img src={kirbyMid} className="w-full h-full" />
            )}
            {kirbyStage === "open" && (
                <img ref={kirbyRef} src={kirbyOpen} className="w-full h-full" />
            )}

            {kirbyStage === "open" && (
                <img
                    ref={fakeCursorRef}
                    src={fakeCursor}
                    className="w-10 h-10 absolute top-0 left-0"
                    style={{ pointerEvents: "none", transformOrigin: "center center" }}
                    alt="Fake Cursor"
                />
            )}
        </div>
    );
};

export default KirbyAnimation;
