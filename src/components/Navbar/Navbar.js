import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { NavbarStyles } from './NavbarStyles';



const Navbar = ({sticky}) => {
    const { theme, toggle } = useContext(ThemeContext);

    return (
        <NavbarStyles  theme={theme}>
            <nav id="sticky-header" className={sticky ? "navbar navbar-sticky" : "navbar"}>
                <div className="navbar">
                {sticky ? 
                    <a className="navbar--logo" href="/">
                        Christina Kopecky
                    </a> : null}                   
                    <div className="navbar--link">
                        <a className="navbar--link-item" href="#contact">Contact Me</a>
                        <a className="navbar--link-item" href="#portfolio">Portfolio</a>
                        <a className="navbar--link-item" href="/resume">Resumé  <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        <button onClick={toggle}>
                            <FontAwesomeIcon     icon={theme.oppositeTheme === "light" ? faSun : faMoon }/>
                        </button>
                    </div>                
                </div>
            </nav>
        </NavbarStyles>
    );
};

export default Navbar;