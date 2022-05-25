import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup"
import HomePage from "../pages/Home/HomePage"
import Address from "../pages/Address/Address"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<App />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/signup" element={<Signup /> } />
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/home" element={<Address/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;