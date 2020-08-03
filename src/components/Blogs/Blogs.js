import React, { useContext, useEffect, useState } from 'react';
import data from './blogs.json'
import {BlogContainerStyle, BlogStyle, BlogImg, BlogTitle, BlogBody, BlogDescription, BlogLink, H2BlogContainerStyle } from './BlogStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../../context/ThemeContext';

const Blogs = ({ stickyRef }) => {
    const { theme } = useContext(ThemeContext);
    const [ articles, setArticles ] = useState([])
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        const getRandomArticles = (blogs) => {
            let indexArr = [];
            let randomArticles = [];
            while(indexArr.length < 6) {
                let random = Math.floor(Math.random() * blogs.length);
                console.log(indexArr.indexOf(random) < 0);
                if(indexArr.indexOf(random) < 0) {
                    indexArr = [...indexArr, random];
                    randomArticles = [...randomArticles, blogs[random]];
                }
            }
            setArticles(randomArticles);
        };
        getRandomArticles(data.blogs)
        setLoading(false);
    }, []);
    


    if(!loading) {
        console.log(articles, "articles")
        return (
            <H2BlogContainerStyle theme={theme}>
               <h2 id="featured-blogs">Featured Blogs</h2>
                <BlogContainerStyle ref={stickyRef} theme={theme}>
                    {articles.map(blog => {
                        return (
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
                        )
                    })}
                </BlogContainerStyle>
            </H2BlogContainerStyle>
    );
    } else {
        return <div>Loading...</div>
    }
    
};

export default Blogs;