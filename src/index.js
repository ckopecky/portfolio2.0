//installed packages
import "dotenv/config";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//my contexts
import { ThemeContextProvider } from './context/ThemeContext';
import { AppContextProvider } from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

//my components
import App from './App';
import ScrollToTop from './ScrollToTop';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <ThemeContextProvider>
        <AppContextProvider>
          <React.StrictMode>
              <App />
          </React.StrictMode>
        </AppContextProvider>
      </ThemeContextProvider>
      </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
