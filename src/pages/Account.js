import React from 'react'
import { useEffect, useState } from 'react';
import { auth } from '../Firebase'
const Account = () => {

  const [isAuthenticated, setIsAuthenticated] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user)
        setIsAuthenticated(user.displayName)
      else
        setIsAuthenticated("");
      console.log(user);
    })
  }, [isAuthenticated])
  return (
    <>
      <div className='account-main'>
        <div className='account'><h2>Hello, {isAuthenticated} </h2></div>
      </div>
    </>


  )
}

export default Account