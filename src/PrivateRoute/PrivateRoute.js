import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Firebase from '../firebase/firebase';


const PrivateRoute = () => {
    const { user } = Firebase();
    console.log(user);
    return (
        <div>
            {
                user.email ? <Outlet /> : <Navigate to="/login" />
            }
        </div>
    );
};

export default PrivateRoute;