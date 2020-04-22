import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Hero } from './components/Hero';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { AppContext } from './context/AppContext';
import Grid from './components/Grid';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    height: 100%;
    margin: 0 auto;
    font-size: 1.4rem;
    width: 100%;
    background-image: ${(props) => {
		  return props.theme.backgroundPicture;
    }};
    background-attachment: fixed;
    background-size: cover;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* background: ${props => props.theme.background}; */
    color: ${props => props.theme.onBackground};
    z-index: 0;
  }

  a {
    color: ${props => props.theme.onSurface};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.secondaryVariant}
    }
  }

  button {
    color: ${props => props.theme.onSecondary};
    background: ${props => props.theme.oppositeTheme === "dark" ? props.theme.secondary : props.theme.secondaryVariant};
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }

`;

const OverlayStyle = styled.div`
    background-color: ${(props) => {
      return props.theme.oppositeTheme === 'dark'
        ? 'rgba(218, 200, 175, 0.5)'
        : 'rgba(0, 0, 102, 0.8)';
	  }};
    background-attachment: fixed;
    width: 100%;
    padding-bottom: 40px;

`;


const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isSticky, stickyRef } = useContext(AppContext);


  return (
    <React.Fragment>
      <OverlayStyle theme={theme}>
        <GlobalStyle theme={theme}/>
        <Navbar sticky={isSticky}/>
        <Hero stickyRef={stickyRef}/>
        <Grid />
      </OverlayStyle>
    </React.Fragment>
  );
}

export default App;
