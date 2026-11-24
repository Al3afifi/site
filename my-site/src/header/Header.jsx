import { useState } from 'react'
import './Header.css'

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (!(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
        document.getElementById("header").style.fontSize = "30px";
        document.getElementById("header").style.padding = "20px 10px";
        document.querySelector(".header-link-container").style.gap = "20px";
        // document.querySelector(".header-link-container").classList.remove("scrolled");
    } else {
        document.getElementById("header").style.fontSize = "25px";
        document.getElementById("header").style.padding = "0px 10px";
        document.querySelector(".header-link-container").style.gap = "2px";
        document.querySelector(".header-link-container").style.backgroundColor = "var(--background-color)";
        // document.querySelector(".header-link-container").classList.add("scrolled");
    }
}
function Header() {

    return (
    <>
        <div id="header">
            <a className='header-link' href='/'>Home</a>
            <div className='header-link-container'>
                <a className='header-link' href='#about_page'>About</a>
                <a className='header-link' href='#experiences_page'>Portfolio</a>
                {/* In the future I want this to be a hoverable object that brings down experience, projects, skils... */}
                <span className='header-link'>Contact</span>
            </div>
        </div>
    </>
    )
}

export default Header
