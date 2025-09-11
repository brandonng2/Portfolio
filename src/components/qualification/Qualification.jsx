import React, { useState } from "react";
import { EducationData, ExperienceData } from "./QualificationData";
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const renderQualificationItem = (item, index, isReversed = false) => {
        const isEven = index % 2 === 0;
        const showLeft = isReversed ? !isEven : isEven;

        return (
            <div key={item.id} className="qualification__data">
                <div>
                    {showLeft && (
                        <>
                            <h3 className="qualification__title">{item.title}</h3>
                            <span className="qualification__subtitle">{item.subtitle}</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>{item.date}
                            </div>
                        </>
                    )}
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    {index < (isReversed ? ExperienceData.length - 1 : EducationData.length - 1) && (
                        <span className="qualification__line"></span>
                    )}
                </div>

                <div>
                    {!showLeft && (
                        <>
                            <h3 className="qualification__title">{item.title}</h3>
                            <span className="qualification__subtitle">{item.subtitle}</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>{item.date}
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* EDUCATION */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {EducationData.slice().reverse().map((item, index) => renderQualificationItem(item, index, false))}
                    </div>

                    {/* EXPERIENCE */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {ExperienceData.slice().reverse().map((item, index) => renderQualificationItem(item, index, true))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification