import React from 'react'
import { NavLink } from 'react-router-dom'

function Hamburger() {
  return (
    <>
    <div className=' md:hidden flex flex-col justify-center items-center w-full   gap-1 '>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'><NavLink to={'/addpost'}>Create Post</NavLink></button>
                <NavLink to={'/profile'}>
                    <button 
                    className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'>
                    <i className="ri-user-line"></i> 
                    </button>
                </NavLink>
            </div>
    </>
  )
}

export default Hamburger