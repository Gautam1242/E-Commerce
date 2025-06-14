<<<<<<< HEAD
import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";


const Footer = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <p className="text-3xl font-medium mb-5 flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
            <PiShoppingCartThin />
            ShopCArt
          </p>
          <p className="w-full md:w-2/3 text-gray-600">
            <span className="text-xl ">
              Welcome to ShopCArt <br />Your Ultimate Online Shopping
              Destination!
            </span>
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collection">Collections</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 99999999</li>
            <li>shopcart@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ shopcart.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
=======
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur reiciendis ad tempore aut a!
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 99999999</li>
                    <li>foreversupport@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
