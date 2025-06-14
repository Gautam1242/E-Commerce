import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products}=useContext(ShopContext);

    const [bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{
        const bestProducts=products.filter((item)=>(item.bestseller));
        setBestSeller(bestProducts.slice(0,5));
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
<<<<<<< HEAD
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Explore our Best Sellers – the most loved products by our customers. Tried, tested, and trusted, these top picks are flying off the shelves fast!</p>
=======
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
        </div>
        {/* rendering best seller products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller