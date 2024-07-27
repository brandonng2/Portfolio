import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ng</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skill" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/brandon.ng.50159836/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/brandon_ng2/" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://x.com/branbong2" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.tiktok.com/@brandon_ng2" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-tiktok"></i>
                    </a>
                    <a href="https://github.com/brandonng2" className="footer__social-icon" target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Brandon Ng. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer