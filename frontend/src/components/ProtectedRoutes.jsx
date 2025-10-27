import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login';
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children})=> {
    const {isAuthenticated}= useSelector(store=>store.authSlice);
    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }

    return children;
}

export default ProtectedRoutes