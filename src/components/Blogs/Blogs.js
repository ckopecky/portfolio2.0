import React, { useContext, useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import {BlogContainerStyle, BlogStyle, BlogImg, BlogTitle, BlogBody, BlogDescription, BlogLink, H2BlogContainerStyle, BlogContainer } from './BlogStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../../context/ThemeContext';

const Blogs = ({ stickyRef }) => {
    const { theme } = useContext(ThemeContext);
    const [ loading, setLoading] = useState(true);
    const [ data, err, errMsg ] = useAxios(process.env.REACT_APP_ARTICLES)


    useEffect(() => {
        setLoading(false);
    }, []);
    


    if(!loading) {
        return (
            <H2BlogContainerStyle theme={theme}>
               <h2 id="blogs">Featured Blogs</h2>
                <BlogContainerStyle ref={stickyRef} theme={theme}>
                    {data.slice(-9).map(blog => {
                        return (
                            <BlogContainer href={blog.link} target="_blank" rel="noopenner noreferrer">
                            <BlogStyle key={blog.id} theme={theme}>
                                <BlogImg theme={theme} src={blog.picture} />
                                <BlogBody theme={theme}>
                                    <BlogTitle theme={theme}>
                                        {blog.title}
                                    </BlogTitle>
                                    <BlogDescription className="blog-text">
                                        {blog.description}<br />
                                    </BlogDescription>
                                    <BlogLink href={blog.link}>
                                        {`Read More`}&nbsp;&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;&nbsp;
                                    </BlogLink>
                                </BlogBody>
                            </BlogStyle>
                            </BlogContainer>
                        )
                    })}
                </BlogContainerStyle>
            </H2BlogContainerStyle>
    );
    } else if (loading) {
        return <div>Loading...</div>
    } else if (err) {
        return (
            <BlogContainerStyle theme={theme}>
                Error: {errMsg}
            </BlogContainerStyle>
        )
    }
    
};

export default Blogs;