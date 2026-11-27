import './ParticlesBackground.css';
import { useEffect, useMemo, useState } from 'react';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from '../assets/particles.json';

const getCssParticleColor = () =>
    getComputedStyle(document.documentElement)
        .getPropertyValue('--particles-color')
        .trim() || '#ffffff';

/**
 * Reusable theme-aware particles background confined to its positioned parent.
 */
function ParticlesBackground({ id = 'particles-js', className = '', theme, optionsOverride }) {
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
        ...optionsOverride,
        fullScreen: { enable: false },
        particles: {
            ...particlesConfig.particles,
            ...optionsOverride?.particles,
            paint: {
                ...particlesConfig.particles?.paint,
                color: { value: particleColor },
            },
            links: {
                ...particlesConfig.particles.links,
                ...optionsOverride?.particles?.links,
                color: particleColor,
            },
        },
        interactivity: {
            ...particlesConfig.interactivity,
            ...optionsOverride?.interactivity,
            events: {
                ...particlesConfig.interactivity?.events,
                ...optionsOverride?.interactivity?.events,
            },
        },
    }), [particleColor, optionsOverride]);

    return (
        <div className={`particles-bg ${className}`.trim()}>
            <ParticlesProvider init={loadSlim}>
                <Particles id={id} options={particleOptions} />
            </ParticlesProvider>
        </div>
    );
}

export default ParticlesBackground;
