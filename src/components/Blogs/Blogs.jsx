import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Blogs = (props) => {
    const {id, authorImage, authorName, blogImage, blogTitle, publishDate, readTime} = props.blog;
    const addBookmark = props.addBookmark;
    const timeCount = props.timeCount;

    return (
        <div className='mt-5'>
            <img className='w-full rounded-lg' src={blogImage} alt="Blog image" />
            <div className='flex my-3 justify-between items-center'>
                <div className='flex'>
                <img className='w-12 h-12 rounded-full mr-5' src={authorImage} alt="author image" />
                <div>
                    <p className='font-bold text-xl'>{authorName}</p>
                    <p className='text-sm text-gray-500'>{publishDate}</p>
                </div>
                </div>
                <p className=' text-gray-600'>{readTime} min read <span onClick={()=>addBookmark(blogTitle)}>
                <FontAwesomeIcon icon={faBookmark} />
                </span></p>
            </div>
            
            <h3 className='font-bold text-3xl my-4'>{blogTitle}</h3>
            <p className=' text-gray-500'>#programming #technology</p>
            <p className='my-5' onClick={()=>timeCount(readTime)}><a className='text-blue-800 underline' href="#">Mark as read</a></p>
            <hr className='mb-7'/>
        </div>
    );
};

export default Blogs;