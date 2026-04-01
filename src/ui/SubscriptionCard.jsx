import React from 'react';

const SubscriptionCard = ({product}) => {

    return (
      <div>
            <div className=" card shadow-md border border-gray-200   bg-base-100">
                <div className="card-body relative">
                    <span className={`
                        absolute  -top-3 left-27 md:-top-3 md:left-28 lg:-top-3 lg:left-40
                         ${product.badge ?
                        "badge  badge-xl badge-warning"
                        : ""}  `}>
                        {product.badge}</span>
                            <div className='bg-white shadow-md w-10  rounded-full'> 
                                 <img  className=' p-2' src={product.image} alt={product.name} /></div>
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <div className="text-xl">${product.price}/mo</div>
                    <p className='text-neutral-400'>{product.tagline}</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
{
    product.features.map((feature,index)=>  <li key={index} className='flex  items-center gap-2'> {feature}</li>)
}

                    </ul>
                    {/* <div className="mt-6 ">
                        <Button className="w-full" 
                        highlighted={price.highlighted}
                        text={price.buttonText} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;