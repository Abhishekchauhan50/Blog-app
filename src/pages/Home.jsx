import React from 'react'
import { usefirebase } from '../context/FirrebaseContext'
import Login from './Login';
import BlogList from './BlogList';

function Home() {

    const firebase = usefirebase()
    const user = firebase.currentUser
    

  return (
    <>
    {(user)?  <BlogList/>:<Login/>}
    </>
  )
}

export default Home