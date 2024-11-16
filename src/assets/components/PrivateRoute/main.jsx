import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute(){
    const token = localStorage.getItem('token');

    const isAuth = !!token;

    return isAuth ? <Outlet/> : <Navigate to="/login"/>
    
}

export default PrivateRoute;