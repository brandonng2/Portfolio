import React, { useRef } from "react";
import "./projects.css"
import { ProjectData } from "./ProjectData"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Pagination, Autoplay } from 'swiper/modules';

const Projects = () => {
    const isDragging = useRef(false);

    const handleCardClick = (url) => {
        if (!isDragging.current && url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section className="project container section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My personal work</span>

            <Swiper
                className="project__container"
                loop={true}
                grabCursor={true}
                spaceBetween={12}
                keyboard={{ enabled: true }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                onTouchStart={() => { isDragging.current = false; }}
                onSliderMove={() => { isDragging.current = true; }}
                onTouchEnd={() => { setTimeout(() => { isDragging.current = false; }, 50); }}
                breakpoints={{
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 3, spaceBetween: 24 },
                }}
                modules={[Keyboard, Pagination, Autoplay]}
            >
                {ProjectData.slice().reverse().map(({id, image, title, description, language, year, url}) => {
                    return (
                        <SwiperSlide
                            className={`project__card${url ? ' project__card--link' : ''}`}
                            key={id}
                            onClick={() => handleCardClick(url)}
                        >
                            <span className="project__year">{year}</span>
                            <h3 className="project__name">{title}</h3>
                            <img src={image} alt="" className="project__img"/>
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