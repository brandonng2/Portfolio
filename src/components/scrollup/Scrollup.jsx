import React from "react";
import './scrollup.css';

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")
        if (this.scrollY >= 560) scrollUp.classList.add("show__scroll");
        else scrollUp.classList.remove("show__scroll");
    })

    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp