'use client';

import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { CiShoppingCart } from 'react-icons/ci';

function Navbar() {
    const items = useSelector((state) => state.cart.items); // Ensure you are selecting the correct state slice

    return (
        <div className='w-[100%] bg-white shadow-lg py-[20px]'>
            <div className='w-[90%] items-center m-auto flex justify-between'>
                <span className='text-[30px] font-serif'>Umair</span>
                <div className='flex items-center gap-3 '>
                    <Link href='/'>Home</Link>
                    <div className='flex relative'>
                        <Link href='/cart'><CiShoppingCart className='text-[35px]' /></Link>
                        <span className='bg-red-500 text-white w-[25px] h-[25px] rounded-[100%] flex justify-center items-center absolute right-[-10px] top-[-6px]'>{items.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
