import React from "react"
import { useHistory } from "react-router-dom";
import './Login.css'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
    }
  }
`

const Login = () => {
  let email
  let password
  const history = useHistory();
  const [ userLogin,{data, loading, error},] = useMutation(USER_LOGIN);

  const onClick = () => {
    userLogin({ variables: {email: email.value, password: password.value}})
    email.value = '';
    password.value = '';
  }
  if(!loading && data){
    localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_NAME, data.login.token);
    // localStorage.removeItem('token') signOutの時
    history.push("/home");
  }
  let errorMessage
  if(!loading && error){
    errorMessage = error.message
  }

  return (
    <div className="Login">
      <h2>Login</h2>
      <form
          onSubmit={e => {
          e.preventDefault();
          onClick();
          }}
        >
        <p>
          email：
          <input type="text" name="name" size="40" 
            ref={node => {
              email = node;
            }}
          />
        </p>
        <p>
          password：<input type="text" name="name" size="40" 
            ref={node => {
              password = node;
            }}
          />
        </p>
          <td><button type="submit">Login</button></td>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{errorMessage}</p>}        
    </div>
  );
}

export default Login