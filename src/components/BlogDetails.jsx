import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AppContext } from './context';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState('');
    const data = useContext(AppContext);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setBlogDetail(data);
    };
    useEffect(() => {
        fetchData(data.searchUrl + id);
    }, []);

    const createMarkup = () => {
        return { __html: blogDetail.body };
    };
    return (
        <div className='blog-detail'>
            <h1>{blogDetail.title}</h1>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
    );
};

export default BlogDetails;
