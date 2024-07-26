import React from 'react';
import scrollImage from '../../assets/scroll.svg';

const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <img src={scrollImage} alt="" className="home__scroll-button"/>
                <span className="home__scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown