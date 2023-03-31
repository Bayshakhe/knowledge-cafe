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

    const [bookmark, setBookmark] = useState([])
    const addBookmark = () => {
        const exist = JSON.parse(localStorage.getItem('bookmarked'))
        if(exist){
            const extended = exist + 1;
            localStorage.setItem('bookmarked', JSON.stringify(extended));
        }
        else{
            localStorage.setItem('bookmarked', 1);
        }
        setBookmark(localStorage.getItem('bookmarked'))
    }
    useEffect(()=>{
        setBookmark(localStorage.getItem('bookmarked'))
    },[bookmark])

    
    return (
        <div className='lg:flex justify-between gap-5'>
            <div>
            {
                blogs.map(blog => <Blogs key={blog.id} blog={blog} addBookmark={addBookmark}></Blogs>)
            }
            </div>
            <Bookmarked bookmark={bookmark}></Bookmarked>
        </div>
    );
};

export default Contianer;