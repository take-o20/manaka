import React, { useState } from "react"
import './SignUp.css'
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const USER_SIGNUP= gql`
  mutation userLogin($email: String!, $password: String!, $firstName: String!, $lastName: String!, $phoneNumber: String){
    signup(input:{email: $email, password: $password, firstName: $firstName, lastName:$lastName, phoneNumber:$phoneNumber}){
      token
    }
  }
`

const SignUp = ()=> {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const history = useHistory()
  const [ userSignUp,{data, loading, error},] = useMutation(USER_SIGNUP);
  const onClick = () => {
    console.log(lastName)
    userSignUp({variables:{
      email: email, 
      password: password, 
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
    }})
  }
  if(!loading && data){
    history.push("/login");
  }
  return (
    <div class="container my-5 py-5 z-depth-1">
     <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
     <div class="row d-flex justify-content-center">
       <div class="col-md-6">
         <form action="#!" class="text-center"
            onSubmit={e => {
              e.preventDefault();
              onClick();
            }}>
            <p class="h4 mb-4">登録</p>
            <div class="form-row mb-4">
              <div class="col">
                <input type="text" id="defaultRegisterFormFirstName" placeholder="姓" class="form-control"
                  onChange={e => setLastName(e.target.value)}/>
              </div>
              <div class="col">
                <input type="text" id="defaultRegisterFormLastName" placeholder="名" class="form-control"
                  onChange={e => setFirstName(e.target.value)}/>
              </div>
            </div>
            <input type="email" id="defaultRegisterFormEmail" placeholder="メールアドレス" class="form-control mb-4"
              onChange={e => setEmail(e.target.value)}/>
            <input type="password" id="defaultRegisterFormPassword" placeholder="パスワード" aria-describedby="defaultRegisterFormPasswordHelpBlock" class="form-control"
              onChange={e => setPassword(e.target.value)}/>
            <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">最低8文字以上で1文字以上の数字が含まれている必要があります </small>
            <input type="number" id="defaultRegisterPhonePassword" placeholder="電話番号" aria-describedby="defaultRegisterFormPhoneHelpBlock" class="form-control"
             onChange={e => setPhoneNumber(e.target.value)}/>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" id="defaultRegisterFormNewsletter" class="custom-control-input"/>
              <label for="defaultRegisterFormNewsletter" class="custom-control-label">
                お知らせメールを受信する
              </label>
            </div>
            <button type="submit" class="btn btn-info my-4 btn-block">登録</button>
            <p>またはSNSで登録:</p>
            <a href="#" role="button" class="mx-1">
            <i class="fab fa-facebook-f">
            </i></a><a href="#" role="button" class="mx-1"><i class="fab fa-twitter">
            </i></a><a href="#" role="button" class="mx-1"><i class="fab fa-linkedin-in">
            </i></a><a href="#" role="button" class="mx-1"><i class="fab fa-github">
            </i></a><hr/><p><em>登録</em> することで 
            <a href="" target="_blank">利用規約</a>
            に同意したものとみなします
            </p>
          {loading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
      </section>
      </div>
  );
}

export default SignUp