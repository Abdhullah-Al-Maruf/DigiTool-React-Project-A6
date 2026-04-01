import { Check } from 'lucide-react';
import React from 'react';
import Button from './Button';

const SubscriptionCard = ({ product,additem,setAdditem }) => {
 const handleClickEvent=(product)=>{
   const ifExist= additem.find(item=> item.title === product.title)
   if (ifExist) {
    alert("item already in")
    return
    
   } 
setAdditem([...additem ,product])

 }
    return (
        <div>
            <div className=" card h-full shadow-md border border-gray-200   bg-base-100">
                <div className="card-body relative">
                    <span className={`
                        absolute  -top-3 right-0
                         ${product.badge ==="Best Seller"?
                            "badge  badge-xl bg-amber-200 badge-warning" :product.badge ==="Popular"? 
                            "badge badge-xl bg-[#e1e7ffFF] text-violet-700 ":" badge badge-xl bg-[#dbfce7FF] text-green-600"  }  `}>
                        {product.badge}</span>

                    <div className='bg-white shadow-md w-10  rounded-full'>
                        <img className=' p-2' src={product.image} alt={product.title} /></div>
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <p className='text-neutral-500'>{product.description}</p>
                    <div className="text-xl">${product.price}/mo</div>
                    <p className='text-neutral-400'>{product.tagline}</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            product.features.map((feature, index) => <li key={index}
                                className='flex text-neutral-500 items-center gap-2'>
                                <Check color='green' /> {feature}</li>)
                        }

                    </ul>
                       <Button onClick={()=>handleClickEvent(product)}
                        text={product.buttonText} />
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;