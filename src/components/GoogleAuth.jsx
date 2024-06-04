import React from 'react'
import { usefirebase } from '../context/FirrebaseContext'

function GoogleAuth() {

  const firebase = usefirebase()
  
  const handleGoogleLoIN  = ()=>{
    firebase.googleLogin ()
  }

  return (
    <>
     <button onClick={handleGoogleLoIN} className='  bg-gradient-to-tr from-blue-500 to  bg-blue-700 py-2 px-9 font-semibold hover:bg-sky-200 text-white rounded-3xl '>Login with google</button>      
    </>
  )
}

export default GoogleAuth