
import { Check } from 'lucide-react';
import React from 'react';
import Button from './Button';

const PricingCard = ({ price }) => {

    return (
        <div>
            <div className={ ` card shadow-md border border-gray-200  ${price.highlighted ? " text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] " 
                
                :""}  bg-base-100 `}>
                <div className="card-body relative">
                    <span className={`
                        absolute  -top-3 left-27 md:-top-3 md:left-28 lg:-top-3 lg:left-40 ${price.badge ?
                        "badge  badge-xl badge-warning"
                        : ""}  `}>
                        {price.badge}</span>

                    <h2 className="text-3xl font-bold">{price.title}</h2>
                    <div className="text-xl">${price.price}/mo</div>
                    <p className='text-neutral-400'>{price.tagline}</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
{
    price.features.map((feature,index)=>  <li key={index} className='flex  items-center gap-2'> <Check color={`${price.highlighted ? "white" :"green"}`}/> {feature}</li>)
}

                    </ul>
                    <div className="mt-6 ">
                        <Button className="w-full" 
                        highlighted={price.highlighted}
                        text={price.buttonText} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;