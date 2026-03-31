import React from 'react';

const ReadyToTransform = () => {
    return (
        <div className=' p-5 md:py-30  md:px-50 min-h-96 bg-linear-to-r
                         from-[#4f39f6]
                        to-[#9514fa]  space-y-8 text-center'>
        <div>
            <h1 className='text-3xl font-bold text-neutral-200'>Ready to Transform Your Workflow?</h1>
            <p className='mt-5 text-neutral-200'>Join thousands of professionals who are already using Digitools to work smarter.
Start your free trial today.Join thousands of professionals who are already using Digitools to work smarter.
Start your free trial today.</p>
        </div>
        <div className='flex gap-3 justify-center items-center'>
            <button className=' btn text-violet-600 font-semibold rounded-full bg-neutral-200 p-2'>Explore Products</button>
            <button className=' text-white btn btn-outline font-semibold rounded-full '>View Pricing</button>

        </div>

        </div>
    );
};

export default ReadyToTransform;