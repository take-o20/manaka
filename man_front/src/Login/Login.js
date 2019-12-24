import React, { useLayoutEffect } from "react"
import './Login.css'
import gql from "graphql-tag";
import { useQuery} from "@apollo/react-hooks";
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
  let rel
  const [ userLogin, {data}] = useMutation(USER_LOGIN);
  console.log(data)
  if(data){
    rel='you have already logined'
  }else{
    rel=''
  }
  return (
    <div className="Login">
      <h2>Login</h2>
      <form
          onSubmit={e => {
          e.preventDefault();
          userLogin({ variables: {email: email.value, password: password.value}})
          email.value = '';
          password.value = '';
          }}
          action={rel}
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
        { 
        rel ? <h2 style={{color:"red", margin:"20"}}>{rel}</h2>:""}
    </div>
  );
}

export default Login