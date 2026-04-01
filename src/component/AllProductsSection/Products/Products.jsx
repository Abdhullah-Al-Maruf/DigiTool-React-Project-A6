import React, { use } from 'react';
import SubscriptionCard from '../../../ui/SubscriptionCard';

const Products = ({subscriptionDataPromise}) => {
    const ProductData=use(subscriptionDataPromise)

    return (
        <div>
            { ProductData.map(product=> <SubscriptionCard key={product.id} product={product}/>)}
        </div>
    );
};

export default Products;