import React from "react";
import ParallaxScene from "../components/ParallaxScene";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Divider from "../components/Divider";

const Home = () => {
    return (
        <div className="w-full">
            <ParallaxScene />
            <Divider />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
