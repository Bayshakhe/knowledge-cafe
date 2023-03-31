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
    const [bookmarkList, setBookmarkList] = useState([])

    const addBookmark = (blogTitle) => {
        // console.log(blogTitle)

        const list = JSON.parse(localStorage.getItem('bookmarkList'));
        if(list){
            const newList = [...list, blogTitle]
            localStorage.setItem('bookmarkList', JSON.stringify(newList))
        }
        else{
            const markList = [blogTitle];
            localStorage.setItem('bookmarkList', JSON.stringify(markList))
        }
        // setBookmarkList(JSON.parse(localStorage.getItem('bookmarkList')))
        setBookmarkList(localStorage.getItem('bookmarkList'))



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
    },[bookmark]);
    useEffect(()=>{
        // setBookmarkList(JSON.parse(localStorage.getItem('bookmarkList')))
        setBookmarkList(localStorage.getItem('bookmarkList'))
    },[bookmarkList])

    const [readTimeCount, setReadTimeCount] = useState();
    const timeCount = (readTime) => {
        const existTime = JSON.parse(localStorage.getItem('time'))
        if(existTime){
            const newTime = JSON.parse(existTime) + JSON.parse(readTime);
            localStorage.setItem('time', newTime)
        }
        else{
            localStorage.setItem('time',readTime)
        }
        setReadTimeCount(localStorage.getItem('time'))
    }
    useEffect(()=>{
        setReadTimeCount(localStorage.getItem('time'))
    },[readTimeCount])

    return (
        <div className='lg:flex justify-between gap-5'>
            <div>
            {
                blogs.map(blog => <Blogs key={blog.id} blog={blog} addBookmark={addBookmark} timeCount={timeCount}></Blogs>)
            }
            </div>
            <Bookmarked bookmark={bookmark} bookmarkList={bookmarkList} readTimeCount={readTimeCount}></Bookmarked>
        </div>
    );
};

export default Contianer;