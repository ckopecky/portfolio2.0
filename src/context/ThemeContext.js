import React, { useState, createContext } from 'react';

//my resources
import LightCode from '../assets/screenshotlight.png';
import DarkCode from '../assets/screenshotdark.png';


//create context to hold themes
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [isLight, setIsLight] = useState(true);

	//define light and dark themes...
	const dark = {
		backgroundPicture: `url('${DarkCode}')`,
		oppositeTheme: "light",
		buttonbg: "#47a5bf",
		buttoncolor: "#ffe54f",
		background: '#121212',
		cardColor: 'darkslategrey',
		primary: '#bb86fc',
		primaryVariant: '#3700b3',
		secondary: '#03dac6',
		surface: '#121212',
		error: '#cf6679',
		onPrimary: '#000000',
		onSecondary: '#000000',
		onBackground: '#fafafa',
		onSurface: '#fafafa',
		onError: '#000000',

	};

	const light = {
		backgroundPicture: `url('${LightCode}')`,
		oppositeTheme: "dark",
		buttonbg: "#1e39a6",
		buttoncolor: "yellow",
		background: '#F1EFE7',
		cardColor: 'whitesmoke',
		primary: '#6200ee',
		primaryVariant: '#3700b3',
		secondary: '#03dac6',
        secondaryVariant: '#018786',
        surface: "#ffffff",
        error: "#b00020",
        onPrimary: "#ffffff",
        onSecondary: "#000000",
        onBackground: "#000000",
        onSurface: "#000000",
		onError: "#ffffff",
    };
    
    const toggle = () => {
        return isLight ? setIsLight(false) : setIsLight(true);
    }

    const theme = isLight ? light : dark;

	return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
};
