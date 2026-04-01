import { ShoppingCart } from 'lucide-react';
import Button from '../../ui/Button';
import React from 'react';
const Navbar = ({additem}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li>
                                <a>Features</a>

                            </li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonial</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-2xl  bg-linear-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text
                        text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       <li><a>Products</a></li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonial</a></li>
                            <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <div className='relative'>
<span className=' hidden md:block ' ><ShoppingCart /> </span>
<span className='hidden  md:block absolute  -top-4  -right-3   font-bold text-xl '>
    {additem.length}</span>
                    </div>
                    
                    <a href="/login">Login</a>
                    <Button text="Get Started" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;