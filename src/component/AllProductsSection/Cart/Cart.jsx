import React from 'react';
import AddCard from '../../../ui/AddCard';

const Cart = ({ additem, setAdditem }) => {
    console.log(additem);
    return (
        <>
            <div className='shadow min-h-80 p-5 rounded-md'>
                <h1 className='font-semibold'>Your Cart</h1>
                <div>
                    {
                        additem.map(item => <AddCard  key={item.id}
                         additem={additem}   setAdditem={setAdditem}
                            item={item} />)

                    }
                </div>
            </div>

        </>
    );
};

export default Cart;