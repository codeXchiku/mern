import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import Error from './pages/Error'
import Footer from './components/Footer'
import Logout from './pages/Logout'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App