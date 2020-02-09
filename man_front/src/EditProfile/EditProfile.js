import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import './EditProfile.css'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

const UPLOAD_FILE_STREAM = gql`
  mutation singleUploadStream($file: Upload!, $userId:String!) {
    singleUploadStream(file: $file, userId: $userId) {
      filename
      mimetype
      encoding
    }
  }
`

const EditProfile = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastNmae, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [password, setPassword] = useState()
  const [confirmPass, setConfirmPass] = useState('')
  const [src, setSrc] = useState('')
  const [uploadFileMutate] = useMutation(UPLOADFILE)
  const [uploadFile,{data, loading, error}] = useMutation(UPLOAD_FILE_STREAM)
  const [file, setFile] = useState()
  const onClick = () =>{
    console.log("bbbbbbbbbbbbbbb",file)
  }
  const onChange=(event) => {
    if (event.target.files === null) {
      return
    }
    const file = event.target.files.item(0)
    if (file === null) {
      return
    }
    file && uploadFile({ variables: { file: file, userId:"ck6egnntm000p08824ciy854j" } })
    file && setFile(file)
  }
  return (
    <div class="container-fluid">
    <div id="it6rz">
      <h3 class="font-weight-bold text-center white-text pb-2">Edit Profile</h3>
    </div>
    <section id="ik61l">
        <form id="profile" name="profile"
         onSubmit={e => {
          e.preventDefault();
          onClick();
        }}>>
            <div class="card-body z-depth-2 px-4">
                <div class="md-form mt-3">
                    <div class="mt-3 md-form">
                        {file && <img src={file} className="profilePhoto"/>}
                        <img src="https://manphoto.s3-ap-northeast-1.amazonaws.com/UNADJUSTEDNONRAW_thumb_1.jpg" className="profilePhoto"/>
                        <input type="file" 
                        onChange={(e) => onChange(e)}
                        multiple 
                        />
                        <ul id="ID001" ></ul>
                    </div>
                </div>
                <div class="md-form mt-3">
                    <i class="fa fa-user prefix grey-text"></i>
                    <input type="text" placeholder="First Name" class="form-control" value={firstName} onChange={e=>setFirstName(e.target.value)}/></div>
                    <div class="md-form mt-3">
                    <i class="fa fa-user prefix grey-text"></i>
                    <input type="text" placeholder="Last Name" class="form-control" value={lastNmae} onChange={e=>setLastName(e.target.value)}/></div>
                    <div class="md-form"><i class="fa prefix grey-text fa-pen"></i>
                    <input type="text" placeholder="Bio" class="form-control" value={bio} onChange={e=>setBio(e.target.value)}/></div>
                    <div class="md-form"><i class="fa fa-envelope prefix grey-text"></i>
                    <input type="text" id="form2" placeholder="Mail Address" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/></div>
                    <div class="md-form"><i class="fas fa-key prefix grey-text"></i>
                    <input type="password" id="form4" placeholder="Password" class="form-control" value={password} onChange={e => setPassword(e.target.value)}/></div>
                    <div class="md-form"><i class="fas fa-key prefix grey-text"></i>
                        <input type="password" placeholder="Password(Confirm)" class="form-control" value={confirmPass} onChange={e=>setConfirmPass(e.target.value)}/></div>
                    <div class="text-center my-3">
                        <button class="btn btn-indigo btn-block" disabled={password!='' && !(password===confirmPass)}>
                          <span style={{color:"white"}}>Send</span>
                          </button>
                    </div>
                    </div>
                </form>
            </section>
        </div>

  )
}

export default EditProfile