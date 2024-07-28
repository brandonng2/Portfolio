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
                <p className="about__description"> 
                    I'm Brandon Ng, a Data Science major at the UC, San Diego. 
                    Inspired by Baymax from "Big Hero 6," 
                    I've been passionate about machine learning, artificial 
                    intelligence, and computer vision. The idea of using 
                    technology to make an impact on people's lives 
                    drew me to this field, and I've been passionate about 
                    exploring the possibilities of computer science ever since.
                    <br/><br/>
                    Beyond academics, I enjoy weight lifting, playing 
                    basketball and badminton, and relaxing with video 
                    games. I'm always eager to learn new technologies and 
                    collaborate on projects that make a difference!
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