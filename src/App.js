//installed packages
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

//my context
import { AppContext } from './context/AppContext';
import { ThemeContext } from './context/ThemeContext';

//my components
import Blogs from './components/Blogs/Blogs';
import { Contact } from './components/Contact/Contact';
import { FourOhFour } from './components/FourOhFour/FourOhFour';
import { Hero } from './components/Hero/Hero';
import { TopNavBar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

//my styled components
import { GlobalStyle, OverlayStyle } from './context/GlobalStyle';


const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isSticky, stickyRef } = useContext(AppContext);


  return (
    <React.Fragment>
      <OverlayStyle theme={theme}>
        <GlobalStyle theme={theme}/>
        <TopNavBar sticky={isSticky}/>
        <Switch>
          <Route exact path="/">
            <Hero stickyRef={stickyRef}/>
            <Projects />
            <Blogs />
            <Contact />
          </Route>
          <Route>
            <FourOhFour stickyRef={stickyRef}/>
          </Route>
        </Switch>
        
      </OverlayStyle>
    </React.Fragment>
  );
}

export default App;
