import React, { useContext } from 'react';
import { UserContext } from '../UserContext'


const SignOut = () => {
  const { logout } = useContext(UserContext)

  const onClick = async (e) => {
    e.preventDefault()
        logout()
  }
  

  return (
    <button onClick={onClick}>Sign Out</button>
  )
}

export default SignOut

