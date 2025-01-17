import React from 'react';
import handImage from '../../assets/hand.svg';
import sendImage from '../../assets/send.svg';

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title"> Brandon Ng
                <img src={handImage} alt="" className="home__hand"/>
            </h1>
            <h3 className="home__subtitle">Software Engineer / Data Scientist</h3>
            <p className="home__description">
                Welcome! I'm Brandon Ng, a Data Science 
                student at UC San Diego, with strong interets in 
                machine learning and artifical intelligence.
            </p>
            <a href="#contact" className="button button--flex" style={{ marginTop: 12 }}> Say Hello
                <img src={sendImage} alt="" className="button__icon"/>
            </a>
        </div>
    )
}

export default Data