import React from 'react';
import Firebase from '../../firebase/firebase';

const RequireAuth = ({ Children }) => {
    const { user } = Firebase();
    return (
        <div>

        </div>
    );
};

export default RequireAuth;