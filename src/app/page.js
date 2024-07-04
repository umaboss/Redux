'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Homepage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const getProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='w-[90%] flex mt-[50px] flex-wrap m-auto gap-[20px]'>
            {loading ? (
                Array(8).fill(0).map((_, index) => (
                    <div key={index} className='w-[23.5%] flex justify-center items-center flex-col px-[20px] py-[10px] border-[1px] border-black'>
                        <Skeleton width={100} height={100} />
                        <Skeleton count={2} />
                        <Skeleton width={100} height={30} />
                    </div>
                ))
            ) : (
                products.map((product) => (
                    <div key={product.id} className='w-[23.5%] shadow-2xl hover:shadow-none flex justify-center items-center flex-col px-[20px] py-[10px] border-[1px] border-black'>
                        <img className='w-[50%]' src={product.image} alt='img' />
                        <h4>{product.title}</h4>
                        <h5>${product.price}</h5>
                        <button className='bg-gray-600 shadow-2xl hover:shadow-none py-[10px] px-[30px] text-white rounded-[10px]' onClick={() => handleAdd(product)}>Add to cart</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Homepage;
