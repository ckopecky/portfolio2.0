
import React, { useEffect } from 'react';
import { useRouter } from './hooks/useRouter';



const ScrollToTop = ({children}) => {
    const { pathname, query } = useRouter();
    useEffect(() => {
        try {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } catch (error) {
            window.scrollTo(0,0);
        }
    }, [pathname, query]);
    
    return <div>{children}</div>;
}

export default ScrollToTop;