//installed packages
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

//my context
import { ThemeContext } from '../../context/ThemeContext';
//my styled-component
import { NavbarStyles } from './NavbarStyles';
//my assets
import PDFDownload from '../../img/WebsiteAssets/Kopecky_Christina_Resume.pdf';




export const Navbar = ({sticky}) => {
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
                    
                        <a className="navbar--link-item" href={PDFDownload} target="_blank" rel="noopener noreferrer">Resumé  <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        <button onClick={toggle}>
                            <FontAwesomeIcon     icon={theme.oppositeTheme === "light" ? faSun : faMoon }/>
                        </button>
                    </div>                
                </div>
            </nav>
        </NavbarStyles>
    );
};

