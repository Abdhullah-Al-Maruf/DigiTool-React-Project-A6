import React from 'react';
import { toast } from 'react-toastify';
const AddCard = ({item,additem ,setAdditem}) => {
    const handleDeleteButton=(singleItem)=>{
      toast.error('deleted', {
position: "top-center",
theme: "colored"

});
    const filteredItem=additem.filter(el=> el.title !== singleItem.title)
    setAdditem(filteredItem)


    }
    return (
        <div>
         
           <div className='shadow p-3 rounded-md flex justify-between '>
           
                <div className='flex items-center gap-4'>
                        <div>
                <img className='p-2 btn   rounded-full' src={item.image} alt="" />
                </div> 
                  <div><h1>{item.title}</h1>
                    <h3 className='text-gray-600'>${item.price}</h3>
                </div>
                </div>
                <button
                onClick={()=>handleDeleteButton(item)}
                className='text-red-600 btn'> Remove</button>
           </div>
            
        </div>
    );
};

export default AddCard;