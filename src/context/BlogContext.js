import React, { createContext, useEffect } from 'react';
import { useAxios } from '../hooks/useAxios';
require('dotenv').config();

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
	const [data, err, errMsg, loading ] = useAxios(process.env.REACT_APP_ARTICLES);
	console.log(data, err, errMsg, loading);
    return (
		<BlogContext.Provider value={{ data, err, errMsg, loading }}>
			{children}
		</BlogContext.Provider>
	);
}