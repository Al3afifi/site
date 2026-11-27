import { useState, useEffect } from 'react'
import './Header.css'
import ParticlesBackground from '../components/ParticlesBackground'

const HEADER_PARTICLE_OVERRIDES = {
    particles: {
        number: {
            value: 25,
            density: { enable: false },
        },
    },
    interactivity: {
        events: {
            onClick: { enable: false },
        },
    },
};

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(
                document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
            );
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="header" className={scrolled ? 'scrolled' : ''}>
            <ParticlesBackground
                id="header-particles"
                className={`header-particles ${scrolled ? 'header-particles-hidden' : ''}`}
                optionsOverride={HEADER_PARTICLE_OVERRIDES}
            />
            <div className='header-link-container'>
                <a className='header-link' href='/'>Home</a>
            </div>
            <div className='header-link-container'>
                <a className='header-link' href='#about_page'>About</a>
                <a className='header-link' href='#experiences_page'>Portfolio</a>
                {/* In the future I want this to be a hoverable object that brings down experience, projects, skils... */}
                <a className='header-link' href='#contact_page'>Contact</a>
            </div>
        </div>
    );
}

export default Header
