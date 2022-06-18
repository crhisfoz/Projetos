import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup"
import HomePage from "../pages/Home/HomePage"
import Address from "../pages/Address/Address";
import Cart from "../pages/Cart/Cart"
import EditAddress from "../pages/EditAdress/EditAdress";
import Profile from "../pages/Profile/Profile"
import EditProfile from "../pages/EditProfile/EditProfile"
import Restaurant from "../pages/Restaurant/Restaurant"
import Orders from "../pages/Orders/Orders"



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<App />} />
                <Route path="/address" element={<Address />} />
                <Route path="/cart/:id" element={<Cart />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/profile/edit-address" element={<EditAddress />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/restaurant/:id" element={<Restaurant />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;