import React, { useRef, useState, useEffect, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	useEffect(() => {
		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);

	const [isSticky, setSticky] = useState(false);

	const stickyRef = useRef(null);
	const handleScroll = () => {
		window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
			? setSticky(true)
			: setSticky(false);
	};

	window.addEventListener('scroll', handleScroll);

	return (
		<AppContext.Provider value={{ stickyRef, isSticky }}>
			{children}
		</AppContext.Provider>
	);
};
