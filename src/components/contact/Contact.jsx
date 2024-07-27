import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import sendImage from '../../assets/send.svg';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_3yv8gnn', 'template_dss8cwt', form.current, {
            publicKey: 'bMPwx2XxwPWNMjLGL',
        })
        e.target.reset()
        // make a pop up that says sent
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">My Contact Information</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Phone Number</h3>
                            <span className="contact__card-data">(510) 415-2892</span>
                            <a href="tel:+15104152892" className="contact__button">Call me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">brandonng0904@gmail.com</span>
                            <a href="mailto:brandonng0904@gmail.com.com" className="contact__button">Email me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-linkedin-square contact__card-icon"></i>
                            <h3 className="contact__card-title">LinkedIn</h3>
                            <span className="contact__card-data">Brandon Ng</span>
                            <a href="https://www.linkedin.com/in/brandonng2/" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Follow Me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Send Me a Message Here</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name"/>
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email"/>
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your message"></textarea>
                        </div>
                        <button className="button button--flex"> 
                            Send Message
                            <img src={sendImage} alt="" className="button__icon"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact