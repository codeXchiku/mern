import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import Error from './pages/Error'
import Footer from './components/Footer'
import Logout from './pages/Logout'
import Service from './pages/Service'
import AdminLayouts from './layouts/AdminLayouts'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import AdminUpdate from './pages/AdminUpdate'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<>
            <Navbar />
            <Outlet />
            <Footer />
          </>}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
          </Route>

          {/* for Admin layout */}
          <Route path='/admin' element={<AdminLayouts />}>
            <Route index element={<Navigate to="users" replace />} />
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='users/:id/edit' element={<AdminUpdate />} />
          </Route>

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App