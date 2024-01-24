import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

const Slidenav = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <header>
            <h1>Logo</h1>
            <nav ref={navRef}>
                <a href="#">Acceuil</a>
                <a href="#">Mes projets</a>
                <a href="#">Contact</a>
                <button className='nav-btn nav-class-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Slidenav;