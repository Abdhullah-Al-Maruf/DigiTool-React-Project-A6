import React from 'react';

const RatingSection = () => {
    return (
        <div className='   bg-linear-to-r from-[#4f39f6] to-[#9514fa] min-h-[233px]'>
            {/* parent div */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 p-10 mt-10'>
                <div className=' p-5 md:p-15    md:border-r md:border-gray-100/20'>
                    <h1 className='font-bold text-5xl text-white'>50K+</h1>
                    <div className='font font-semibold text-xl text-gray-300'>Active Users</div>
                </div>
                <div className=' p-5 md:p-15  md:border-r md:border-gray-100/20 ' >
                    <h1 className='font-bold text-5xl text-white'>200+</h1>
                    <div className='font font-semibold text-xl text-gray-300'>Premium Tools</div>
                </div>
                <div className=' p-5 md:p-15   '>
                    <h1 className='font-bold text-5xl text-white'>4.9</h1>
                    <div className='font font-semibold text-xl text-gray-300'>Rating</div>
                </div>
            </div>
        </div>
    );
};

export default RatingSection;