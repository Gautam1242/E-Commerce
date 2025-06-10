import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
<<<<<<< HEAD
        <p className="text-xl font-medium mb-5">ShopCArt <span><br />Admin Panel</span></p>
=======
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
        <button onClick={()=>setToken("")} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar