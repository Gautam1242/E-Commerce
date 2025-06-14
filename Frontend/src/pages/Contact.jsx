import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500 '>New Delhi 110058,<br />Pitampure Near Haiderpur Metro Station</p>
<<<<<<< HEAD
          <p className='text-gray-500'>Phone : +91 8181818181 <br /> Email : shopcart_contact@gmail.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at ShopCArt</p>
=======
          <p className='text-gray-500'>Phone : +91 8181818181 <br /> Email : cartbill_contact@gmail.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at CartBill</p>
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
          <p className='text-gray-500 '>Learn More About Our Teams and Job Openings</p>
          <p className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact