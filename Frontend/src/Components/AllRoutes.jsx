import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from "../Pages/Login"
import CreateNote from "../Pages/CreateNote"
import HomePage from '../Pages/HomePage'
import Signup from '../Pages/Signup'
import UserProfile from "../Pages/UserProfile"

const AllRoutes = () => {
  return (
      <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="/sign" element={<Signup/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/createNote" element={<CreateNote/>} />
      </Routes>
  )
}

export default AllRoutes
