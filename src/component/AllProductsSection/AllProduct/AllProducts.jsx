
import React, { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

// data for Subscription
const  subscriptionDataPromise =fetch("/subscriptonData.json").then(res=>res.json())


const AllProducts = () => {
    // state for btn toggle
    const [tab, setTab] = useState("Product")


    return (
        <div className='w-[90%] mx-auto mb-10'>
            {/* text content */}
            <div className='text-center'>
                <h1 className='font-bold text-3xl'>Premium Digital Tools</h1>
                <p className='text-neutral-400'>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
            </div>
            <div className='flex justify-center mt-5' >
                <div className='flex justify-center gap-2 px-5 py-1 bg-gray-100 rounded-full w-[180px]'>

                    <button
                        onClick={() => setTab("Product")}
                        className={
                            `  ${tab === "Product" ? " text-white shadow-xl btn rounded-full bg-linear-to-b from-[#4f39f6] to-[#9514fa] " : ""} `
                        }>Products</button>
                    <button
                        onClick={() => setTab("Cart")}
                        className={
                            `  ${tab === "Cart" ? " text-white shadow-xl btn rounded-full bg-linear-to-b from-[#4f39f6] to-[#9514fa] " : ""} `
                        }
                    > Cart(2) </button>
                </div>

            </div>


            <div>
          { tab ==="Product" ? 
            <Products subscriptionDataPromise={subscriptionDataPromise} /> 
             : <Cart/>  }
                        
            </div>


        </div>
    );
};

export default AllProducts;