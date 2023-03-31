import React from 'react';

const Blogs = (props) => {
    const {id, authorImage, authorName, blogImage, blogTitle, publishDate, readTime} = props.blog
    console.log(id)
    return (
        <div className='bg-orange-200'>
            {/* <img src={blogImage} alt="" /> */}
            <div className='flex'>
                {/* <img src={authorImage} alt="" /> */}
                <div>
                    <p>{authorName}</p>
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