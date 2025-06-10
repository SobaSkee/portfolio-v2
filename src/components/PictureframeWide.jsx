import React, { useState } from "react";
import pictureFrameWide from "../assets/projects/picture-frame-wide.svg";
import close from "../assets/ui/menu-close.svg";
import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiNextdotjs,
    SiExpress,
    SiTailwindcss,
    SiFirebase,
    SiMaterialdesign,
    SiGooglemaps,
    SiFramer,
    SiThreedotjs,
    SiBlender,
    SiPython,
    SiOpencv,
    SiMediapipe,
    SiVite,
} from "react-icons/si";

const getTechIcon = (tech) => {
    const icons = {
        React: SiReact,
        "Node.js": SiNodedotjs,
        "Next.js": SiNextdotjs,
        NeonPostgres: SiPostgresql,
        MongoDB: SiMongodb,
        Express: SiExpress,
        TailwindCSS: SiTailwindcss,
        Firebase: SiFirebase,
        "Material UI": SiMaterialdesign,
        "Mapbox API": SiGooglemaps,
        "Framer Motion": SiFramer,
        "Three.js": SiThreedotjs,
        Blender: SiBlender,
        Python: SiPython,
        OpenCV: SiOpencv,
        MediaPipe: SiMediapipe,
        Vite: SiVite,
    };
    return icons[tech] || null;
};

const PictureframeWide = ({
    imgSrc,
    imgAlt,
    title,
    description,
    link,
    technologies,
    viewProject = true,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="relative w-[20rem] h-[10rem] md:w-[20rem] md:h-[12rem]">
            <img
                src={imgSrc}
                alt={imgAlt}
                className="z-10 w-3/5 h-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain hover:scale-103 hover:-rotate-1 transition-all duration-300 hover:cursor-pointer"
                onClick={() => setModalOpen(true)}
            />
            <img
                src={pictureFrameWide}
                alt="picture-frame"
                className="w-full h-full absolute top-0 left-0 pointer-events-none"
            />
            {/* opens popup modal when clicked */}
            {modalOpen && (
                <div className="z-50 p-4 md:p-10 fixed inset-0 bg-black/80 flex items-center justify-center">
                    <button
                        className="absolute top-2 right-2 md:top-5 md:right-5 text-white text-2xl hover:text-gray-300 z-50"
                        onClick={() => setModalOpen(false)}
                    >
                        <img src={close} alt="close" className="w-6 md:w-15" />
                    </button>
                    <div className="py-8 px-4 w-full md:max-w-8xl flex flex-col gap-0 md:flex-row md:gap-8 relative h-[90vh] md:h-auto">
                        <div className="w-full md:w-1/2 h-1/3 md:h-auto">
                            <img
                                src={imgSrc}
                                alt={imgAlt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-between gap-2 md:gap-4 p-3 md:p-4  h-2/3 md:h-auto">
                            <div className="flex flex-col gap-2 md:gap-4">
                                <h1 className="text-xl md:text-2xl font-bold text-white">
                                    {title}
                                </h1>
                                <p className="text-sm md:text-lg text-white">
                                    {description}
                                </p>
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <h2 className="text-base md:text-xl font-bold text-white">
                                        Technologies
                                    </h2>
                                    <div className="flex flex-wrap gap-1 md:gap-4">
                                        {technologies.map((tech, index) => {
                                            const Icon = getTechIcon(tech);
                                            return Icon ? (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center gap-0.5 md:gap-1 group bg-[#F8A5C2] p-1 md:p-2 "
                                                >
                                                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:text-[#bd7290] transition-colors duration-300" />
                                                    <span className="text-[8px] md:text-xs text-white">
                                                        {tech}
                                                    </span>
                                                </div>
                                            ) : null;
                                        })}
                                    </div>
                                </div>
                            </div>

                            {viewProject && (
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm md:text-lg nes-btn is-primary text-white mt-2 md:mt-4"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PictureframeWide;
