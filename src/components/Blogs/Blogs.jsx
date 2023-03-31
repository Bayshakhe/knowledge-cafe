import React from 'react';

const Blogs = (props) => {
    const {id, authorImage, authorName, blogImage, blogTitle, publishDate, readTime} = props.blog
    console.log(id)
    return (
        <div className='bg-orange-200'>
            <img className='w-full' src={blogImage} alt="Blog image" />
            <div className='flex my-3'>
                <img className='w-12 rounded-full mx-3' src={authorImage} alt="author image" />
                <div>
                    <p className='font-bold text-xl'>{authorName}</p>
                    <p>{publishDate}</p>
                </div>
                <p>{readTime} min read</p>
            </div>
            <h3 className='font-bold text-xl'>{blogTitle}</h3>
            <p>#beginners #programming</p>
            <p><a className='text-blue-800 underline' href="#">Mark as read</a></p>
        </div>
    );
};

export default Blogs;