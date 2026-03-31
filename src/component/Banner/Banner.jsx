import React from 'react';
import banner from "../../assets/images/banner.png"
import circle from "/group-5.png"
import Button from '../../ui/Button';
import { Play } from 'lucide-react';
const Banner = () => {
    return (
        <div >
            <div className="hero w-[90%] ">
                <div className="hero-content   flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="   md:ml-20  max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <div className='flex  items-center gap-2 rounded-full bg-[#e1e7ffFF] p-1 w-70 px-2'> <img src={circle} alt="" />
                            <span className='
                        
                                bg-linear-to-b
                             from-[#4f39f6]
                              to-[#9514fa] 
                              bg-clip-text
                            text-transparent
                            font-semibold'>
                                New: AI-Powered Tools Available</span></div>
                        <h1 className="text-5xl mt-3 font-bold">Supercharge Your <br />
                            Digital Workflow</h1>
                        <p className="py-6 text-gray-500">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products

                        </p>
                    <Button text="Explore Products" />
                 <button className=' btn btn-primary rounded-full  bg-linear-to-b
                             from-[#4f39f6]
                              to-[#9514fa] 
                              bg-clip-text
                            text-transparent 
                            ml-4 '> <Play color='#4f39f6'/> Watch Demo </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;