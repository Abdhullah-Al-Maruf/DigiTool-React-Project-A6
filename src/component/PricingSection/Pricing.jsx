
import React, { use } from 'react';
import Card from '../../ui/PricingCard';

// json data
const PricingPromise =fetch("/pricingData.json").then(res=> res.json())


const Pricing = () => {
    const allPricingData =use(PricingPromise)

    return (
        <div className='grid w-[90%] mx-auto gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
       {allPricingData.map(price =><Card key={price.id} price={price}></Card> )} 
        </div>
    );
};

export default Pricing;