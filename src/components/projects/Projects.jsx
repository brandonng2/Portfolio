import React from "react";
import "./projects.css"
import { Data } from "./Data"

// Import Swiper React components 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Pagination } from 'swiper/modules';

const Projects = () => {
    return (
        <section className="project container section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My personal work</span>

            <Swiper className="project__container"
                loop={true}
                grabCursor={true}
                spaceBetween={12}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                }}
                modules={[Keyboard, Pagination]}
            >
                {Data.map(({id, image, title, description, language}) => {
                    return (
                        <SwiperSlide className="project__card" key={id}>
                            <img src={image} alt="" className="project__img"/>
                            <h3 className="project__name">{title}</h3>
                            <p className="project__description">{description}</p>
                            <span className="project__language">{language}</span>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}

export default Projects