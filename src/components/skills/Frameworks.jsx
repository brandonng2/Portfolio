import React from "react";

const Frameworks = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frameworks</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Angular.js</h3>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">React.js</h3>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Node.js</h3>
                        </div>
                    </div> 
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">NoSQL</h3>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Frameworks