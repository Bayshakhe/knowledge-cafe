import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmarked from '../Bookmarked/Bookmarked';

const Contianer = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='lg:flex justify-between'>
            <div>
            {
                blogs.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
            }
            </div>
            <Bookmarked></Bookmarked>
        </div>
    );
};

export default Contianer;