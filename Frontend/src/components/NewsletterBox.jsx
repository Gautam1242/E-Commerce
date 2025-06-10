<<<<<<< HEAD
import React from "react";
import { toast } from "react-toastify";
const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success("Subscribed Successfully");
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% OFF
      </p>
      <p className="text-gray-400 mt-3">
        <span className="text-gray-800 text-xl">Discover</span> unbeatable deals and trendy finds every day at <span className="text-gray-800 text-xl">ShopCArt</span> – Your
        Style, Your Store!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
=======
import React from 'react'
import {toast} from 'react-toastify'
const NewsletterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        toast.success("Subscribed Successfully")
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% OFF</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eos.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
