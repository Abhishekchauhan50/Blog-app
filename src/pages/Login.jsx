import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import GoogleAuth from '../components/GoogleAuth'
import { usefirebase } from '../context/FirrebaseContext'
import { NavLink, useNavigate } from 'react-router-dom'


function Login() {
  const [email, setemail] = useState()
  const [password , setpassword] = useState()
  const navigate = useNavigate()


  const firebase = usefirebase()
  

  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.loginUser(email, password)
  }

  useEffect(()=>{
    (firebase.currentUser)? navigate('/'): navigate('/login')
  },[firebase])



  return (
    <>
    <div className=' flex flex-col justify-center items-center   md:flex-row   '>
        <div className=' bg-gradient-to-tr from-green-500 to px-5 py-10 bg-purple-700 w-full h-[20rem] flex    justify-center items-center  md:w-[60%]  md:h-screen lg:w-[60%]  lg:h-screen'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl  font-bold text-white  lg:text-5xl  '> Welcome to <span className=' text-red-500'>PRASANG</span></h1>
            <h2 className='text-2xl font-semibold text-indigo-900'>Exploring Life's Layers -</h2>
            <p className='text-white text-sm text-wrap '> Embark on a captivating exploration</p>
          </div>
        </div>
        <div className=' w-full text-gray-700 px-6 flex flex-col justify-center py-20 md:w-[40%]  '>
          <form className=' flex flex-col gap-3  justify-center items-center ' action="">
            <div>
              <h1 className='text-xl text-gray-300  font-semibold '>User Login</h1>
            </div>
            <div className=' bg-slate-300 p-2 rounded-3xl flex gap-2 '>
              <i class="ri-mail-open-fill"></i>
              <input type='email' onChange={e=>setemail(e.target.value)} value={email} className='outline-none bg-slate-300 ' placeholder='Email' />
            </div>
            <div className=' bg-slate-300 p-2 rounded-3xl flex gap-2 '>
              <i class="ri-lock-password-fill"></i>
              <input type='password' onChange={e=>setpassword(e.target.value)} value={password} className='outline-none bg-slate-300 ' placeholder='Password' />
            </div>
            <div>
              <button onClick={handleLogin} className='  bg-gradient-to-tr from-green-500 to  bg-purple-700 py-2 px-20 hover:bg-sky-200 font-semibold text-white rounded-3xl '>Login</button>
            </div>
          </form>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-full h-[.01rem]  m-1 bg-gray-500'></div>
            <GoogleAuth/>
          </div>
          <div className='py-10  text-gray-300 flex justify-center items-center'>
            <h1>Don't have an account ? <span className='font-semibold text-blue-700'><NavLink to={'/signup'}>Sign UP</NavLink></span></h1>
          </div>
        </div>
    </div>
    </>
  )
}

export default Login

{/* <div className=''>
            <img src="https://img.freepik.com/free-photo/rock-hand-gesture-3d-icon-metal-music_107791-16726.jpg?t=st=1716953831~exp=1716957431~hmac=ffd80a10d5d7df26890aa3badd1b6235bbe887b79bd3e900e28886dfd4340373&w=740" alt="" />
          </div> */}