import React from "react";
import "./skills.css";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "SQL", "R", "Java", "C++", "C", "HTML", "CSS", "Swift", "Assembly"]
    },
    {
        title: "Frameworks & Databases",
        skills: ["React.js", "Next.js", "Node.js", "Django", "Flask", "Angular.js", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "NoSQL", "SQLite"]
    },
    {
        title: "Libraries & ML",
        skills: ["PyTorch", "TensorFlow", "Keras", "HuggingFace", "Transformers", "Diffusers", "Scikit-learn", "XGBoost", "LightGBM", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn", "D3.js", "TorchDistributor", "LSTMs", "CNNs", "Vision Transformers", "Zero-Shot VLMs"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Docker", "Apache Spark", "AWS S3", "Google BigQuery", "Databricks", "Jupyter Notebook", "Tableau", "GitHub", "VSCode", "Bash", "LaTeX", "Selenium", "Figma", "Vercel", "Gemini API", "Clerk.js", "Stripe"]
    }
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical expertise</span>
            <div className="skills__container container">
                {skillCategories.map(({ title, skills }) => (
                    <div className="skills__category" key={title}>
                        <h3 className="skills__category-title">{title}</h3>
                        <div className="skills__tags">
                            {skills.map(skill => (
                                <span className="skills__tag" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
