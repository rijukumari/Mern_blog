import React from 'react';
import {assets} from '../assets/assets';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

function Navbar() {
  const {user,logoutUser} = useContext(StoreContext)
  return (
    <>
    <nav className='bg-white p-4 sticky top-0 shadow-sm relative z-50'>
        <div className='flex container mx-auto justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <Link to={'/'}>
              <img src= {assets.logo} alt=''/>
              
              </Link>  
              <p className='hidden sm:block text-2xl '>
                Meta <span className='font-bold'>Blog</span>
              </p>
            </div>
                <ul className='hidden sm:flex gap-5 text-xl font-normal justify-center items-center text-gray-700'>
                    <Link to='/' className='cursor-pointer hover:text-orange-500 duration-300'>Home</Link>
                    <Link to='/blogs' className='cursor-pointer hover:text-orange-500 duration-300'>Blogs</Link>
                    <Link to='/about' className='cursor-pointer hover:text-orange-500 duration-300'>About</Link>
                    <Link to='/contact' className='cursor-pointer hover:text-orange-500 duration-300'>Contact</Link>
                    
                </ul>
                {
                  user ? (
                    <div  className='flex gap-2'>
                      <Link to={'/dashboard'} className='bg-black px-6 py-2 rounded-full text-white'>Dashboard</Link>
                      <button onClick={logoutUser} className=' px-6 py-2 rounded-full text-white bg-orange-500 text-white py-2 rounded-full px-8 cursor-pointer hover:bg-orange-600 duration-300'>Logout</button>
                    </div>
                  ):(

                    <Link to = {'/login'} className='bg-orange-500 text-white py-2 rounded-full px-8 cursor-pointer hover:bg-orange-600 duration-300'>Singin</Link>
                  )
                }
        </div>

    </nav>
      
    </>
  )
}

export default Navbar
