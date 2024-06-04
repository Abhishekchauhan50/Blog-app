import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Login from './pages/Login'
import BlogPost from './pages/BlogPost'
import AddPost from './pages/AddPost'
import Profile from './pages/Profile'

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blogpost/:id' element={<BlogPost/>}/>
        <Route path='/addpost' element={<AddPost/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div> 
    </>
  )
}

export default App
