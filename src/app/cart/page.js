'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '@/Redux/Cartslice';

function Cartpage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    return (
        <div className='py-[50px]'>
            <div className='w-[90%]  flex flex-col gap-[20px] m-auto'>
                {cartItems.map((item) => (
                    <div key={item.id} className='flex  p-[20px] justify-between border-[1px] border-black items-center'>
                        <img className='w-[100px]' src={item.image} alt='img' />
                        <h4>{item.title}</h4>
                        <h5>${item.price}</h5>
                        <button className='bg-gray-600 py-[10px] px-[30px] text-white rounded-[10px]' onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                ))}
               <div className='flex justify-end items-end'>
               <div className='flex justify-center mt-[20px] shadow-2xl hover:shadow-none w-[20%] py-[50px] border-[1px] border-black'>
                    <h3 className='text-[20px] font-bold'>Total: ${total.toFixed(2)}</h3>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Cartpage;
