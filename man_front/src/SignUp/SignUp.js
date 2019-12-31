import React from "react"
import './SignUp.css'
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const USER_SIGNUP= gql`
  mutation userLogin($email: String!, $password: String!, $name: String!){
    signup(email: $email, password: $password, name: $name){
      token
    }
  }
`

const SignUp = ()=> {
  let name
  let email
  let password
  const history = useHistory()
  const [ userSignUp,{data, loading, error},] = useMutation(USER_SIGNUP);
  const onClick = () => {
    userSignUp({variables:{email: email.value, password: password.value, name: name.value}})
    name.value = ''
    email.value = ''
    password.value = ''
  }
  if(!loading && data){
    history.push("/login");
  }
  let errorMessage
  if(error && !loading){
    errorMessage = error.message
  }
  return (
    <div className="SignUp">
      <h2>SignUp</h2>
      <form
          onSubmit={e => {
          e.preventDefault();
          onClick();
          }}
        >
        <p>
          name：
          <input type="text" name="name" size="40" 
            ref={node => {
              name = node;
            }}
          />
        </p>
        <p>
          email：
          <input type="text" name="email" size="40" 
            ref={node => {
              email = node;
            }}
          />
        </p>
        <p>
          password：<input type="text" name="password" size="40" 
            ref={node => {
              password = node;
            }}
          />
        </p>
          <td><button type="submit">Sign Up</button></td>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{errorMessage}</p>}
    </div>
  );
}

export default SignUp