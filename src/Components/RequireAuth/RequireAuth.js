import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Firebase from '../../firebase/firebase';

const RequireAuth = ({ children }) => {
    const { user } = Firebase();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;

};

export default RequireAuth;