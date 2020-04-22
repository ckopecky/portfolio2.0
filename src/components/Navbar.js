import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const NavbarStyles = styled.div`

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 2.5rem;
        position: absolute;
        z-index: 1;
        width: 100%;
    }

    .navbar-sticky {
        background: ${props => props.theme.surface};
        position: fixed;
        top: 0;
        left: 0;
        box-shadow: ${props => {
           return props.theme.oppositeTheme === "dark" ? '1px 1px 1px #000' : '1px 1px 1px #fff';
        }};
        animation: moveDown 0.5s ease-in-out;
    }

    .navbar--logo {
        font-family: 'Homemade Apple', cursive;
        width: 30%;
        padding: 0px 10px;
        align-self: center;
        height: 2rem;
        margin-right: 0.5rem;
        animation: rotate 0.7s ease-in-out 0.5s;
    }
    .navbar--link {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .navbar--link-item {
            margin: 0px 20px;
            font-family: 'Roboto', sans-serif;
        }
        button {
            font-family: 'Roboto', sans-serif;
            background: ${props => props.theme.buttonbg};
            color: ${props => props.theme.buttoncolor};
            margin: 0px;
        }
        @keyframes moveDown {
            from {
                transform: translateY(-5rem);
            }
            to {
                transform: translateY(0rem);
            }
        }
    }

`;

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
                        <a className="navbar--link-item" href="/portfolio">Portfolio</a>
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