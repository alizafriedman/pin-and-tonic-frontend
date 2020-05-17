import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {UserContext} from '../UserContext'

const SignOut = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const context = useContext(UserContext)

  
  const onClick = async (e) => {
    
    
   if (loggedIn) setLoggedIn(false);   
    
    return <Redirect to="/" />
};
  

  return <Link onClick={onClick} className="signoutButton">Sign Out</Link>;
}

export default SignOut