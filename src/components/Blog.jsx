import React, { useContext } from 'react';
import BlogItem from './BlogItem';
import { AppContext } from './context';

const Blog = () => {
    const { data } = useContext(AppContext);
    return (
        <div className='container'>
            {data &&
                data.map((item) => {
                    return <BlogItem {...item} key={item._id} />;
                })}
        </div>
    );
};

export default Blog;
