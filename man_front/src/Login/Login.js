import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import './Login.css'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!){
    login(input:{email: $email, password: $password}){
      token
    }
  }
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const [ userLogin,{data, loading, error},] = useMutation(USER_LOGIN);

  const onClick = () => {
    userLogin({ variables: {email: email.value, password: password.value}})
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
    <div class="container my-5 py-5 z-depth-1">
    <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <form action="#!" class="text-center"
            onSubmit={e =>{ e.preventDefault(); onClick();}}>
            <p class="h4 mb-4">ログイン</p>
            <input type="email" id="defaultLoginFormEmail" placeholder="メールアドレス" class="form-control mb-4"
              ref={e => setEmail(e)}/>
            <input type="password" id="defaultLoginFormPassword" placeholder="パスワード" class="form-control mb-4"
              ref={e => setPassword(e)}/>
            <div class="d-flex justify-content-around">
              <div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" id="defaultLoginFormRemember" class="custom-control-input"/>
                  <label for="defaultLoginFormRemember" class="custom-control-label">入力を保存</label>
                </div>
              </div>
              <div>
                <a href="" id="i4r5a">パスワードを忘れた</a>
              </div>
            </div>
            <button type="submit" class="btn btn-info btn-block my-4">ログイン</button>
            <p>まだ登録していない？
            <a href="">登録</a></p>
            <p>SNSでログイン:</p>
            <a href="#" role="button" class="mx-1">
            <i class="fab fa-facebook-f">
            </i></a><a href="#" role="button" class="mx-1"><i class="fab fa-twitter">
            </i></a><a href="#" role="button" class="mx-1"><i class="fab fa-linkedin-in">
            </i></a><a href="#" role="button" class="mx-1"><i class="fab fa-github">
            </i></a>
          </form>
          {loading && <p>Loading...</p>}
          {error && <p>{errorMessage}</p>}
        </div>
      </div>
    </section>
  </div>
  );
}

export default Login