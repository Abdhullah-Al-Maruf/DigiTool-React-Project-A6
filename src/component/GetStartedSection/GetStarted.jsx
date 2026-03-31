import React from 'react';
import one from '../../assets/images/frame-2087326311.png'
import two from '../../assets/images/frame-2087326311 (1).png'
import three from '../../assets/images/frame-2087326311 (2).png'
const GetStarted = () => {
    return (
        <div className='space-y-7 mb-28 '>
            <div className='text-center'>
                <h1 className='text-3xl '>Get Started in 3 Steps</h1>
                <p className='text-neutral-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid  w-[80%] mx-auto grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* card */}
                <div className='flex
                 flex-col justify-center items-center rounded-xl shadow-sm py-5 px-15 relative'>
                    <img className=' p-3 bg-linear-to-b from-[#4f39f6]/10 to-[#9514fa]/10 rounded-full' src="/user.png" alt="user" />
                    <h3 className='font-semibold text-xl'>Create Account</h3>
                    <p className='text-center text-neutral-400'>Sign up for free in seconds. No credit card required to get started.</p>
                    <img className='absolute top-2 right-2  ' src={one} alt="" />
                    <div>
                    </div>
                </div>
                <div className=' flex
                 flex-col justify-center items-center rounded-xl shadow-sm py-5 px-15 relative'>
                    <img className='p-3 bg-linear-to-b from-[#4f39f6]/10
                     to-[#9514fa]/10 rounded-full'
                      src="/package.png" alt="package" />
                    <h3 className='font-semibold text-xl'>Choose Products</h3>
                    <p className='text-center text-neutral-400'>
                        Browse our catalog and select the tools that fit your needs.</p>
                    <img className='absolute top-2 right-2  ' src={two} alt="" />
                    <div>
                    </div>
                </div>
                <div className=' flex
                 flex-col justify-center items-center rounded-xl shadow-sm py-5 px-15 relative'>
                    <img className='p-3 bg-linear-to-b from-[#4f39f6]/10
                     to-[#9514fa]/10 rounded-full' 
                     src="/rocket.png" alt="rocket" />
                    <h3 className='font-semibold text-xl'>Start Creating</h3>
                    <p className='text-center text-neutral-400'> Download and start using your premium 
tools immediately.</p>
                    <img className='absolute top-2 right-2  ' src={three} alt="" />
                    <div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default GetStarted;