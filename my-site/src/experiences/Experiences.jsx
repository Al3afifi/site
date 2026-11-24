import './Experiences.css';
import experiencesData from './experiences.json';

function Experiences() {
    const getDateDisplay = (exp) => {
        if (exp.startDate && exp.endDate) {
            return `${exp.startDate} - ${exp.endDate}`;
        }
        if (exp.startDate) {
            return `${exp.startDate} - Present`;
        }
        return exp.dates || exp.date || '';
    };

    return (
        <div id="experiences_page">
            <div className="experiences-container">
                <h2 className="experiences-subheader">Experience</h2>
                <div className="experiences-list">
                    {experiencesData.map((experience, index) => {
                        const title = experience.company || experience.title;
                        const role = experience.role || experience.myTitle;
                        const dates = getDateDisplay(experience);
                        const hasLinks = experience.links || experience.link;

                        return (
                            <div key={experience.id || index} className="experience-box">
                                <div className="experience-header">
                                    <div className="experience-title-role">
                                        <h3 className="experience-title">{title}</h3>
                                        {role && <span className="experience-role">{role}</span>}
                                    </div>
                                    {dates && <span className="experience-dates">{dates}</span>}
                                </div>

                                <div className="experience-description-container">
                                    {Array.isArray(experience.description) ? (
                                        <ul className="experience-bullets">
                                            {experience.description.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="experience-summary">{experience.description}</p>
                                    )}
                                </div>

                                {experience.skills && experience.skills.length > 0 && (
                                    <div className="experience-skills">
                                        {experience.skills.map((skill, i) => (
                                            <span key={i} className="experience-skill">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {hasLinks && (
                                    <div className="experience-buttons">
                                        {experience.links?.company && (
                                            <a
                                                href={experience.links.company}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="experience-button"
                                            >
                                                Company
                                            </a>
                                        )}
                                        {experience.links?.live && (
                                            <a
                                                href={experience.links.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="experience-button"
                                            >
                                                View Site
                                            </a>
                                        )}
                                        {experience.link && !experience.links && (
                                            <a
                                                href={experience.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="experience-button"
                                            >
                                                Learn More
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Experiences;
