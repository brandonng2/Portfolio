import React from "react"
import "./about.css"
import AboutImg from "../../assets/about.png";
import CV from "../../assets/Resume.pdf";
import fileImg from "../../assets/files.svg"

const About = () => {
    return (
       <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <p className="about__description"> stuff about myself
                </p>
                <a download= 'Resume_BrandonNg.pdf' href={CV} className="button button--flex">Download Resume
                    <img src={fileImg} alt="" className="button__icon"/>
                </a>
            </div>
        </div>
       </section>
    );
};

export default About