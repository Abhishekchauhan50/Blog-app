import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { usefirebase } from '../context/FirrebaseContext'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

function BlogPost() {
    const firebase  = usefirebase()
    const [blogData , setBlogData] = useState(null)
    const [id , setId] = useState(null)
    const [imageULI , setImageURI] =  useState()
    const navigate = useNavigate()
    
    const param = useParams()

    useEffect(()=>{
        setId(param.id)
    },[param])

    //console.log(blogData[id].id);

    useEffect(() => {
        firebase.getData()
            .then((doc) => {
                
                setBlogData(doc.docs); 
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(()=>{
        try {
            (blogData == null || id == null)? null: 
            firebase.getImageUrl(blogData[id].data().imageUrl)
            .then((doc)=>
                setImageURI(doc)
                

        )
            .catch((err)=>console.log(err)) 
        } catch (error) {
            console.log('blogpost error', error);            
        }
    })

    const handleDelete = ()=>{
        firebase.deleteBlogPost(blogData[id].data().userId,blogData[id].id )
        navigate('../')
    }   

  return (
    <>
    <Navbar  />
    <div>

    </div>
    {
        (blogData == null || id == null)? (<Loading/>)
        :
        (<div className='w-full min-h-screen flex   flex-col gap-5 items-center px-5 py-24 '>
        <div className=' font-medium flex flex-col items-center gap-10'>
            <h1 className=' border px-3 rounded-lg  bg-indigo-400 '>
                Author: <span>{blogData[id].data().userName}</span>
            </h1>
            <h1 className='text-3xl text-indigo-500 md:text-6xl lg:text-8xl '>
            {blogData[id].data().title}
            </h1>
            <h1 className=' border px-3 rounded-lg   bg-indigo-400 '>
                Date :<span> {blogData[id].data().createdData}</span>
            </h1>
        </div>
        <div  className='  rounded-lg overflow-hidden w-full p-2  lg:w-[50rem]  '>
            <img className='w-full h-full bg-cover' src={`${imageULI}`} alt="" />
        </div>
        <div className=' font-medium w-full flex-wrap   text-xl py-20 lg:px-40 '>
            <p>
           
            {blogData[id].data().blogText}
            </p>
        </div>
        <div>
            <button onClick={handleDelete} 
            className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'>
                DELETE POST   <i className="ri-delete-bin-line px-2 "></i></button>
        </div>
        </div> )
    }
    
    </>
  )
}

export default BlogPost

