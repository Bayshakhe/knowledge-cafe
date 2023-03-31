import React from 'react';

const Bookmarked = (props) => {
    console.log(props)
    return (
        <div className='mt-5 w-full lg:w-5/12'>
            <h2 className='text-2xl font-bold text-blue-600 bg-gray-200 p-5 rounded-lg border border-blue-500 mb-5'>Spent time on read: {} min</h2>

            <div className=' bg-gray-200 p-5 rounded-lg '>
                <h2 className='text-2xl font-bold'>Bookmarked Blogs: {props.bookmark}</h2>
                <p className='bg-white p-4 font-bold rounded-lg mt-5'>Master Microsoft Power Platform and Become an In-Demand!</p>
            </div>
        </div>
    );
};

export default Bookmarked;