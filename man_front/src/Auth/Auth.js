import React from 'react'
import { Redirect } from 'react-router-dom'

const Auth = (props) => {
  const authToken = localStorage.getItem('token')

  return (
    authToken ? props.children : <Redirect to={'/login'}/>
  )
}


// (props.currentUser.isLoggedIn ? props.children : <Redirect to={'/login'}/>)

export default Auth
