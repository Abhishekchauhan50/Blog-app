import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Tags from '../components/Tags'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import { usefirebase } from '../context/FirrebaseContext'
import Loading from '../components/Loading'

function BlogList() {
  const [blogListData  ,setBlogListData] = useState() 
  const firebase = usefirebase()

  useEffect(()=>{
    firebase.getData()
      .then((doc)=>setBlogListData(doc.docs))

      .catch((err)=>console.log(err))

  })





  return (
    <>
    <div className='flex flex-col justify-center items-center'>
    <Navbar/>
    <Banner/>
    <Tags/>
    <div className='flex flex-wrap gap-4 justify-center   w-full'>
    {
      (blogListData == null)? (<Loading/>)
      :
      (
        blogListData.map((val, i)=>{
          return(
            <BlogCard author = {val.data().title}
            date = {val.data().createdData}
            text = {val.data().blogText}
            id=  {i}/>
          )
        })
      )
    }
    </div>


    
    <Footer/>
    </div>
    </>
  )
}

export default BlogList