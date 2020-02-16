import React from 'react'
import Popup from "reactjs-popup";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';
import { ScrollTo, ScrollArea } from "react-scroll-to";

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
  console.log(props)
  const {id,chatRoomId,permission,myId} = props
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
                      <h2> <br/>added you to Friend</h2>
                      <h3>Do you accept ?</h3>
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
    <div>
      {!permission ? modal: ''}
      <Messages userId={id}  chatRoomId={chatRoomId} myId={myId}/>
      <PostMessage userId={id} chatRoomId={chatRoomId} myId={myId} />
    </div>
  )
}

export default Chat

