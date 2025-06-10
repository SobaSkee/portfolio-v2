import React, { useState } from "react";
import floorBg from "../assets/projects/floor-bg.svg";
import picklepals from "../assets/projects/picklepals.png";
import grocergo from "../assets/projects/grocergo.png";
import PictureframeWide from "./PictureframeWide";
import recordPlayer from "../assets/projects/record-player.svg";
import close from "../assets/ui/menu-close.svg";
import gatorai from "../assets/projects/gatorai.png";
import j2k from "../assets/projects/j2k.svg";
import franklin from "../assets/projects/franklin.svg";
import marioVillage from "../assets/projects/mario-village-blender.png";
import handtracking from "../assets/projects/handtracking.png";
import fortnitePathfinder from "../assets/projects/fortnite-pathfinder.png";

const projects = [
    {
        imgSrc: picklepals,
        imgAlt: "picklepals",
        title: "PicklePals",
        description: "A web app for sharing and discovering pickleball courts.",
        link: "https://github.com/SobaSkee/PicklePals",
        technologies: ["Next.js", "MongoDB", "Mapbox API"]
    },
    {
        imgSrc: grocergo,
        imgAlt: "grocergo",
        title: "GrocerGO",
        description:
            "A web app for ordering groceries at the University of Florida.",
        link: "https://grocer-go-sooty.vercel.app/",
        technologies: ["Next.js", "NeonPostgres", "BetterAuth", "TailwindCSS"]
    },
    {
        imgSrc: gatorai,
        imgAlt: "gatorai",
        title: "GatorAI Website",
        description: "A web app for advertising the Gator AI Club.",
        link: "https://vercel-mirror-ten.vercel.app/",
        technologies: ["React", "TailwindCSS", "Framer Motion", "Three.js"]
    },
    {
        imgSrc: marioVillage,
        imgAlt: "marioVillage",
        title: "Mario Village",
        description: "A 3D Mario Village built in Blender.",
        technologies: ["Blender"],
        viewProject: false,
    },
    {
        imgSrc: handtracking,
        imgAlt: "handtracking",
        title: "Hand Tracking",
        description: "A hand tracking project that controls the mouse cursor.",
        link: "https://github.com/SobaSkee/handtracking",
        technologies: ["Python", "OpenCV", "MediaPipe"],
    },
    {
        imgSrc: fortnitePathfinder,
        imgAlt: "fortnitePathfinder",
        title: "Fortnite Pathfinder",
        description: "A pathfinding algorithm for Fortnite maps using Dijkstra's and A*.",
        link: "https://fortnite-pathfinder.vercel.app/",
        technologies: ["React", "Node.js", "Vite"],
    }

];

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [j2kTag, setJ2kTag] = useState(false);
    const [franklinTag, setFranklinTag] = useState(false);

    const handleRecordPlayerClick = () => {
        setModalOpen(true);
    };
    return (
        <div
            id="projects"
            className="bg-[#bd7290] px-10 py-20 min-h-screen md:h-[120vh] flex flex-col items-center justify-start gap-5 relative"
        >
            <img
                src={floorBg}
                alt="floor-bg"
                className="absolute bottom-0 max-w-none h-[30rem] md:w-full md:h-auto"
            />
            <h1 className="text-lg md:text-4xl font-bold relative mb-12 text-white">
                Projects Gallery
            </h1>
            <p className="text-white text-sm">
                (Click on projects to view more details.)
            </p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 w-full max-w-5xl place-items-center mb-50">
                {projects.map((project, index) => (
                    <PictureframeWide
                        key={index}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        technologies={project.technologies}
                        viewProject={project.viewProject}
                    />
                ))}
            </div>
            <div className="absolute bottom-1 left-10 w-[7rem] md:w-[16rem]">
                <img
                    src={recordPlayer}
                    alt="record-player"
                    className="w-full hover:cursor-pointer hover:scale-102 transition-all duration-300"
                    onClick={handleRecordPlayerClick}
                />
            </div>
            <div className="absolute bottom-3 right-20 md:right-40 w-[5rem] md:w-[10rem] flex flex-row gap-2">
                <img
                    src={j2k}
                    alt="j2k"
                    className="w-[2.5rem] md:w-[5rem] -rotate-10 hover:cursor-pointer hover:scale-102 transition-all duration-300"
                    onMouseEnter={() => setJ2kTag(true)}
                    onMouseLeave={() => setJ2kTag(false)}
                />
                <img
                    src={franklin}
                    alt="franklin"
                    className="w-[3rem] md:w-[6rem] rotate-10 hover:cursor-pointer hover:scale-102 transition-all duration-300"
                    onMouseEnter={() => setFranklinTag(true)}
                    onMouseLeave={() => setFranklinTag(false)}
                />
            </div>
            <div className="absolute bottom-25 right-20 md:bottom-50 md:right-50 pointer-events-none">
                {j2kTag && (
                    <div className="nes-container !p-1 is-rounded -rotate-5 flex items-center justify-center w-fit h-[2rem] bg-white absolute">
                        <p className="text-[8px] md:text-xs">Current paddle</p>
                    </div>
                )}
                {franklinTag && (
                    <div className="nes-container !p-1 is-rounded rotate-5 flex items-center justify-center w-fit h-[2rem] bg-white absolute -right-10 md:-right-20">
                        <p className="text-[8px] md:text-xs">The OG.</p>
                    </div>
                )}
            </div>
            {modalOpen && (
                <div className="z-50 p-10 fixed inset-0 bg-black/80 flex items-center justify-center">
                    <button
                        className="absolute top-5 right-5 text-white text-2xl hover:text-gray-300"
                        onClick={() => setModalOpen(false)}
                    >
                        <img src={close} alt="close" className="w-6 md:w-15" />
                    </button>
                    <div className="relative flex flex-col items-center justify-center gap-5">
                        <h1 className="text-white text-xl font-bold">
                            What I'm listening to this month
                        </h1>
                        <iframe
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/playlist/132gPAeCSdaQdNl7Ki99yf?utm_source=generator"
                            width="100%"
                            height="420px"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
