import React from 'react'

function Banner() {
  return (
    <>
    <div className=' w-full flex justify-center items-center flex-col my-24 p-5'>
        <div className='flex justify-center items-center flex-wrap  gap-5 flex-col'>
            <h1 className='text-6xl lg:text-8xl font-bold'>Welcome to <span className='text-red-500'>Prasang</span> </h1>
            <p className='text-xl lg:text-4xl font-medium '>Where Curiosity Meets Connection</p>
            <p className='w-[100%] lg:text-xl  font-medium '>Uncover a world of perspectives, engage in meaningful conversations, and be inspired by the journey.</p>
        </div>
       <div  className=' flex  justify-center  rounded-xl p-2   overflow-hidden my-16 '>
        <img className='  w-full bg-cover object-fill ' src="https://i.pinimg.com/originals/31/97/b8/3197b8ba55563b0747921bbeb851c838.gif" alt="" />
        </div> 
    </div>
    </>
  )
}

export default Banner