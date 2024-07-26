import React from "react";
import "./skills.css"
import Programs from "./Programs"
import Frameworks from "./Frameworks"
import Tools from "./Tools"
import Libraries from "./Libraries";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical expertise</span>
            <div className="skills__container container grid">
                <Programs/>
                <Libraries/>
                <Frameworks/>
                <Tools/>
            </div>
        </section>
    );
};

export default Skills