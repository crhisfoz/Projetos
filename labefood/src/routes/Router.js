import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Address from "../pages/Address/Address";
import Cart  from "../pages/Cart/Cart.js";
import EditProfile from "../pages/Profile/EditProfile";
import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Restaurants from "../pages/Restaurant/Restaurant";
import SignUp from "../pages/Signup/Signup";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<App />} />
                <Route path="/address" element={<Address /> } />
                <Route path="/cart/:id" element={<Cart/>} />
                <Route exact path="*" element={<Error />} />
                <Route path="/editprofile" element={<EditProfile/>} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/restaurant/:id" element={<Restaurants/>} />
                <Route path="/signup" element={<SignUp /> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router;