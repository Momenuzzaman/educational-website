import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import firebase from '../../firebase/firebase';

const RequireAuth = ({ children }) => {
    const { user } = firebase();
    const location = useLocation();
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate >
    }
    return children;


};

export default RequireAuth;