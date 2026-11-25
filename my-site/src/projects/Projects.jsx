import './Projects.css';
import { useEffect, useMemo, useState } from 'react';
import projectsData from './projects.json';
import particlesConfig from './assets/particles.json';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const getCssParticleColor = () =>
    getComputedStyle(document.documentElement)
        .getPropertyValue('--particles-color')
        .trim() || '#ffffff';

function Projects({ theme }) {
    const [particleColor, setParticleColor] = useState(getCssParticleColor);

    useEffect(() => {
        const updateColor = () => setParticleColor(getCssParticleColor());
        updateColor();

        // Wait for App's effect to update data-theme on <html>, then read the resolved hex color
        const observer = new MutationObserver(updateColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
        return () => observer.disconnect();
    }, [theme]);

    const particleOptions = useMemo(() => ({
        ...particlesConfig,
        fullScreen: { enable: false },
        particles: {
            ...particlesConfig.particles,
            paint: {
                ...particlesConfig.particles?.paint,
                color: {
                    value: particleColor,
                },
            },
            links: {
                ...particlesConfig.particles.links,
                color: particleColor,
            },
        },
    }), [particleColor]);

    return (
        <div id="projects_page">
            <ParticlesProvider init={loadSlim}>
                <Particles
                    id="particles-js"
                    options={particleOptions}
                />
            </ParticlesProvider>


            <div className="projects-container">
                <h2 className="projects-subheader">Projects</h2>
                <div className="projects-list">
                    {projectsData.map((project, index) => {
                        const role = project.myTitle || project.role;
                        const hasLinks = project.links || project.link;

                        return (
                            <div key={project.id || index} className="project-box">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    {role && <span className="project-role">{role}</span>}
                                </div>

                                <div className="project-description-container">
                                    {Array.isArray(project.description) ? (
                                        <ul className="project-bullets">
                                            {project.description.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="project-summary">{project.description}</p>
                                    )}
                                </div>

                                {project.skills && project.skills.length > 0 && (
                                    <div className="project-skills">
                                        {project.skills.map((skill, i) => (
                                            <span key={i} className="project-skill">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {hasLinks && (
                                    <div className="project-buttons">
                                        {project.links?.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-button"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                        {project.links?.live && (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-button"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.link && !project.links && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-button"
                                            >
                                                View Project
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

export default Projects;
