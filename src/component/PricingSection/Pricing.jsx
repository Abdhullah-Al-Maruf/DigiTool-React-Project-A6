
import React, { use } from 'react';
import Card from '../../ui/PricingCard';

// json data
const PricingPromise =fetch("/pricingData.json").then(res=> res.json())


const Pricing = ({additem,setAdditem}) => {
    const allPricingData =use(PricingPromise)

    return (
        <>
        <div className='text-center mb-10'>
            <h1 className='font-bold text-4xl'>Simple, Transparent Pricing</h1>
            <p className='text-xl text-neutral-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        
        <div className='grid w-[90%] mx-auto gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
       {allPricingData.map(price =><Card key={price.id} price={price}></Card> )} 
        </div>
        </>

    );
};

export default Pricing;