import React from 'react'
import Popup from "reactjs-popup";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

import Messages from '../Messages/Messages'
import PostMessage from '../PostMessage/PostMessage'
const jwt = require('jsonwebtoken')

const USER_UPDATE = gql`
  mutation friendUpdate($id: ID!, $permission: Boolean!){
    friendupdate(id: $id, permission: $permission){
      permission
    }
  }
`

const Chat = (props) => {
  const pathId = props.match.params.id
  const decode = jwt.verify(pathId,process.env.REACT_APP_PATH_KEY)
  const {userId, userName, friendId, friendName, 
         chatRoomId, iat, id} = decode
  let {permission} = decode
  const history = useHistory();
  const [ friendUpdate,{data, loading, error},] = useMutation(USER_UPDATE);

  const accept = (e) => {
    if(e){
      friendUpdate({ variables: {id:id,permission: true}})
      permission = true
    }else{
      history.push('/friendlist')
    }
  }
  const modal = <Popup defaultOpen={true} 
                    position="center"
                    closeOnDocumentClick={false}
                    closeOnEscape={false}
                >{ close =>(
                    <div>
                      <h2>{friendName} <br/>added you to Friend</h2>
                      <h3>Do you accept {friendName}?</h3>
                    <button
                      className="button"
                      onClick={() => {
                        accept(true);
                        close();
                      }}
                    >Accept</button>
                    <button
                      className="button"
                      onClick={() => {
                        accept(false);
                        close();
                      }}
                    >No accept </button>
                    </div>)}
                </Popup>
  return(
    <div style={{ textAlign: "center"}}>
      <h2>Friend Name:{friendName}</h2>
      {!permission ? modal: ''}
      <Messages userId={userId} userName={userName} friendName={friendName} chatRoomId={chatRoomId}/>
      <PostMessage userId={userId} userName={userName} friendName={friendName} chatRoomId={chatRoomId}/>
    </div>
  )
}

export default Chat