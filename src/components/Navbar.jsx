import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='text-white flex justify-center w-full p-1 border-b '>
        <div className='  w-full justify-center flex items-center '>
        <span className='text-3xl text-blue-950 font-bold'>!</span>
        <span className='cursor-pointer' ><Link to='/home'>FORGOT</Link></span>
        </div>
        
        <div className='flex  gap-2'>
         <span className='mx-2'><Link to='/signup'>SignUp</Link></span>
         <span className='mx-2'><Link to='/login'>Login</Link></span>
        </div>

        
     
    </div>
  )
}

export default Navbar
