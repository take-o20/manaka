import React, { useEffect, useState} from 'react'
import socketIoClient from 'socket.io-client'
import './PostMessage.css'
import moment from 'moment'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel  from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

const endpoint = process.env.REACT_APP_SOCKET_END
const socket = socketIoClient(endpoint)

const PostMessage = ({
  userId, userName, friendId, friendName, chatRoomId, myId,
}) => {
  // const socket = socketIoClient(endpoint)
  const [message, setMessage] = useState('')
  const messageChange = (e) => {
    setMessage(e.target.value)
  }
  const send = () => {
    socket.emit('client_to_server_message',{
      message: message,
      room: chatRoomId,
      name: myId,
      time:moment(),
    })
    setMessage('')
  }
  return (
    <div>
      <div className="messageInput">
        <TextField
          id="standard-multiline-flexible"
          label="メッセージ"
          multiline
          rowsMax="4"
          size='medium'
          style={{width:"100%",height:"40%"}}
          value={message}
          onChange={messageChange}
          onKeyPress={e=>{
            if(e.key==="Enter"){
              e.preventDefault()
              send()
            }
          }}
        />
      </div>
    </div>
  )
}

export default PostMessage