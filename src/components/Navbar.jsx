import React, { useState } from 'react'
import Hamburger from './Hamburger'
import { NavLink } from 'react-router-dom'


function Navbar() {
    const [ham, setham] = useState(false)
    const handleHam = ()=>{
        setham(!ham)
    }
    //console.log(ham);
  return (
    <>
    <div className='w-full  flex justify-between bg-zinc-800   px-10 py-3  shadow-sm '>
        <div className='flex justify-center items-center gap-4' >
           <div className='w-10 h-10   flex justify-center items-center rounded-full bg-zinc-800 '>
           <i class="ri-pen-nib-fill text-5xl"></i>
           </div>
           <h1 className='text-3xl text-red-500  font-bold '>Prasang</h1>
        </div>
        <div className='md:hidden'>
            <i onClick={handleHam} className="ri-menu-line font-bold text-3xl cursor-pointer"></i>
        </div>
        <div className='hidden md:block  md lg:flex md:gap-20' >
            
            <div className='flex justify-center items-center  gap-20'>
                <button 
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    <NavLink to={'/addpost'}>Create</NavLink></button>
                
                <NavLink to={'/profile'}>
                    <button 
                    className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'>
                    <i className="ri-user-line"></i> 
                    </button>
                </NavLink>
            </div>
        </div>

    </div>
    <div>
        {ham && <Hamburger />}
    </div>
    </>
  )
}

export default Navbar


