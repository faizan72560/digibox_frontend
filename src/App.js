import React from 'react'
import Navbar from './Components/Navbar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from './Components/action/useraction';
import { useEffect } from 'react';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Cart from './Components/Cart';
import Request from './Components/Request';
const App = () => {


  const disppatch=useDispatch()

  useEffect(()=>{
    disppatch(getuser())

  },[disppatch])


  const {isAuthenticated,isLoading}=useSelector(state=>state.user)
  console.log(isAuthenticated)
  return (
    <div>

      
      

      <BrowserRouter>
      <Navbar/>
      {/* {!isAuthenticated && <Navbar/>} */}

      <div>
      {/* {isAuthenticated && <Navbar2/>} */}
      {/* {isAuthenticated && <Sidebar/>} */}


      </div>
      
          
        <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* {isAuthenticated&&<Route path="/home" element={<Home />} />}
        {isAuthenticated&&<Route path="/user" element={<UserPage/>} />}
        {isAuthenticated&&<Route path="/addpost" element={<Model/>} />} */}
        {/* <Route path="/forgotpassword" element={<ForgotPassword/>} /> */}



        {/* <Route path="/profile" element={<Profile/>} /> */}


        <Route path="/" element={!isAuthenticated? <Register />:<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/admin" element={<Admin/>} />
         {isAuthenticated&&<Route path="/cart" element={<Cart/>} />}
         {isAuthenticated&&<Route path="/request" element={<Request/>} />}





          
          

        </Routes>

        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App