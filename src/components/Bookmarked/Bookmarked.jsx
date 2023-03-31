import React from 'react';

const Bookmarked = (props) => {
    const bookmarkList = JSON.parse(props?.bookmarkList)
    // console.log(typeof bookmarkList, bookmarkList)

    return (
        <div className='mt-5 w-full lg:w-5/12'>
            <h2 className='text-2xl font-bold text-blue-600 bg-gray-200 p-5 rounded-lg border border-blue-500 mb-5'>Spent time on read: {props.readTimeCount} min</h2>

            <div className=' bg-gray-200 p-5 rounded-lg '>
                <h2 className='text-2xl font-bold'>Bookmarked Blogs: {props.bookmark}</h2>
                {
                    bookmarkList.map(singleMark => <p className='bg-white p-4 font-bold rounded-lg mt-5'>{singleMark}</p>)
                }
                {/* {
                    bookmarkList.map(singleMark => console.log(singleMark))
                } */}
                
            </div>
        </div>
    );
};

export default Bookmarked;