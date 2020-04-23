import React, { useContext } from 'react';
import { Hero } from './components/Hero/Hero';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import { AppContext } from './context/AppContext';
import Projects from './components/Projects/Projects';
import { GlobalStyle, OverlayStyle } from './context/GlobalStyle';

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isSticky, stickyRef } = useContext(AppContext);


  return (
    <React.Fragment>
      <OverlayStyle theme={theme}>
        <GlobalStyle theme={theme}/>
        <Navbar sticky={isSticky}/>
        <Hero stickyRef={stickyRef}/>
        <Projects />
      </OverlayStyle>
    </React.Fragment>
  );
}

export default App;
