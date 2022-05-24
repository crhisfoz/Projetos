import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Address from "../pages/Address/Address";
import FourFood from "../pages/FourFood/FourFood";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart  from "../pages/Cart/Cart.js";
import Profile from "../pages/ProfilePages/Profile";
import EditProfile from "../pages/ProfilePages/EditProfile";
import Restaurants from "../pages/Restaurants/Restaurants";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<App />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/signup" element={<SignUp /> } />
                <Route path="/address" element={<Address /> } />
                <Route path="/fourfood" element={<FourFood />} />
                <Route path="/cart/:id" element={<Cart/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/editprofile" element={<EditProfile/>} />
                <Route path="/restaurant/:id" element={<Restaurants/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;