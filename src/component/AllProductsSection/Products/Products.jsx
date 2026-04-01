import React, { use } from 'react';
import SubscriptionCard from '../../../ui/SubscriptionCard';

const   Products = ({subscriptionDataPromise ,additem,setAdditem}) => {
    const ProductData=use(subscriptionDataPromise)

    return (
        <div className='grid mt-10 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            { ProductData.map(product=> <SubscriptionCard additem={additem}
            setAdditem={setAdditem}
            key={product.id} product={product}/>)}
        </div>
    );
};

export default Products;