import React from 'react'
import { Redirect } from 'react-router-dom'
const jwt = require('jsonwebtoken')

const Auth = (props) => {
  const authToken = localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME)
  const decode = jwt.verify(authToken, process.env.REACT_APP_AUTH_KEY)
  props.location.state = decode
  return (
    authToken ? props.children : <Redirect to={'/login'}/>
  )
}


// (props.currentUser.isLoggedIn ? props.children : <Redirect to={'/login'}/>)

export default Auth
