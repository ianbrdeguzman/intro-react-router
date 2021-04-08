import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (item) => {
    const { slug, author, bodyExcerpt, publishedAt, title } = item;
    return (
        <>
            <Link to={`/intro-react-router/blog/${slug}`}>
                <div className='blog'>
                    <h2>{title}</h2>
                    <p>{bodyExcerpt}</p>
                    <p>Author: {author}</p>
                    <p>Published at: {publishedAt.slice(0, 10)}</p>
                </div>
            </Link>
        </>
    );
};

export default BlogItem;
