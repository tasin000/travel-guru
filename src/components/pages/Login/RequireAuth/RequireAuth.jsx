import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
import { Navigate, useLocation } from "react-router-dom";
const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if(error){
        return <p>{error?.message}</p>
    }

    if(loading){
        return <p>Loading...</p>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace />
};

export default RequireAuth;