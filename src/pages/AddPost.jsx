import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { usefirebase } from '../context/FirrebaseContext'

function AddPost() {
    const [title ,setTitle] = useState('')
    const [imageURL ,setImageURL] = useState('')
    const [blogText ,setBLogText] = useState('')
    const firebase = usefirebase()
    const navigate =  useNavigate()



    const handleAddBLog = ()=>{
        firebase.AddBlog(title, imageURL, blogText)
        navigate('../')
    }

  return (
    <>
    <div className='flex justify-end py-5   text-4xl text-red-500 px-5'><NavLink to={'../'}><i className="ri-close-line"></i> </NavLink></div>
    <div className=' w-full h-screen bg-transparent flex  flex-col justify-center items-center'>
        <h1 className='text-4xl py-4 font-bold'>Add Your BLog</h1>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2' >
                <label className=' font-medium' htmlFor="">Add Title</label>
                <input onChange={e=>setTitle(e.target.value)} value={title} className='p-2 rounded-3xl outline-none  text-black' type="text " placeholder='Enter your Title' />
            </div>
            <div className='flex flex-col gap-2' >
                <label className=' font-medium' htmlFor="">Add Image</label>
                <div className=' bg-white rounded-3xl px-2'><input onChange={e=>setImageURL(e.target.files[0])}  className='p-2 rounded-4xl outline-none   text-black' type="file"  /></div>
            </div>
            <div className='flex flex-col  gap-2'>
                <label htmlFor="">Add Title</label>
                <textarea onChange={e=>setBLogText(e.target.value)} value={blogText} className='rounded-xl w-[20rem] outline-none h-[17rem] text-black p-3 font-mono'></textarea>
            </div>
            <div className=' flex justify-center bg'>
                <button onClick={handleAddBLog} 
                 className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                    Submit
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddPost