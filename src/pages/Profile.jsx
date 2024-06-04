import React, { useEffect, useState } from 'react'
import { usefirebase } from '../context/FirrebaseContext'
import { NavLink, useNavigate } from 'react-router-dom'

function Profile() {
    const [user  , setUser] = useState(null)
    const firebase = usefirebase()
    const navigate =  useNavigate()

    
    useEffect(()=>{
        setUser(firebase.currentUser)
    }, [firebase])

    const handleLogout = ()=>{

        firebase.logOutUser()
        navigate('/login')
    }

  return (
    <>
    <div className='px-5 bg-zinc-600 py-4'>
        <NavLink to={'../'}><i className="ri-arrow-left-line text-xl"></i></NavLink>
    </div>
    {
        (user== null)? (<h1 className='w-full h-screen text-8xl flex justify-center items-center'>Loading...</h1>):(
                    
        <div className=' w-full h-screen flex justify-center  items-center  '>
                <div className='w-[20rem] h-1/2 bg-zinc-800 rounded-xl flex justify-center items-center gap-5 flex-col text-white lg:w-[30rem]'>
                    <div  className=' w-36 h-36 border flex justify-center items-center overflow-hidden rounded-full'>
                        {(user.photoURL == null)? (<i className="ri-user-fill text-[10rem]"></i>):
                        (<img  className=' w-full h-full ' src={`${(user.photoURL)}`} alt="" />)}
                       
                        
                        {console.log(user.photoURL)}
                    </div>
                    <div className='flex  gap-3'>
                        <label className='font-bold ' htmlFor="">Name : </label>
                        <h1>
                            {user.displayName}
                        </h1>
                    </div>
                    <div className='flex  gap-3'>
                        <label className='font-bold ' htmlFor="">Email :</label>
                        <h1>
                            {user.email}
                        </h1>
                    </div>
                    
                    <div className=' '>
                        <button onClick={handleLogout}
                            className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'>
                            Log OUT</button>
                    </div>
                </div>
        </div>
        )
    }
    
    </>
  )
}

export default Profile

