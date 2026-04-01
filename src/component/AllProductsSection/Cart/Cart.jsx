import React from 'react';
import AddCard from '../../../ui/AddCard';
import Button from "../../../ui/Button"
import { toast } from 'react-toastify';

const Cart = ({ additem, setAdditem }) => {
    const total = additem.reduce((sum, item) => sum + item.price, 0);
    console.log(additem);
    const handleClear=()=>{

toast .success(' Product purchase Successfully !', {
position: "top-center",
theme: "colored",

});
        setAdditem([])
    }
    return (
        <>
            <div className='shadow min-h-80 p-5 rounded-md '>
                <h1 className='font-semibold'>Your Cart</h1>


                {
                    additem.length === 0 ? <div className='text-center mt-10 shadow p-10'> <h1>No Product available </h1>
                        <p>Add some item from Product section!</p>
                    </div> :

                        <div className='flex flex-col gap-5'>
                            {
                                additem.map(item => <AddCard key={item.id}
                                    additem={additem} setAdditem={setAdditem}
                                    item={item} />)

                            }
                     <div className='flex justify-between mt-8 '>
                 <p className='text-gray-700 font-semibold'>Total:</p>
                    <p className='font-bold text-xl'> ${total} </p>
                </div>
                <div>
                    <Button 
                    onClick={handleClear}
                    className='w-full'
                    text={"Proceed to Checkout"}/>
                </div>
                        </div>

                
                        
                }


               

            </div>
            

        </>
    );
};

export default Cart;