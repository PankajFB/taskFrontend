import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UseAuthContext";
const ProtectedRoute = ({ children }) => {

    const [userId,setUserId]=useState('');
    const [isLoggedIn,setisLoggedIn]=useState(false);

    const fetchUser=async()=>{ 
        const response= await fetch('http://localhost:3007/login');
        var data= await response.json();
        setUserId(data[0].userId);
        setisLoggedIn(data[0].isLoggedIn)
        console.log("userId",userId);
      
      }
         fetchUser();

  if (!isLoggedIn) {
    return <Navigate to="/Home" />;
  }
  return children;
};

export default ProtectedRoute;
