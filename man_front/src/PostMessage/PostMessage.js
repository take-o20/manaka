import React, { useEffect, useState} from 'react'
import socketIoClient from 'socket.io-client'
import './PostMessage.css'
const endpoint = process.env.REACT_APP_SOCKET_END
const socket = socketIoClient(endpoint)

const PostMessage = ({
  userId, userName, friendId, friendName, chatRoomId
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
      name: userName,
    })
    setMessage('')
  }
  return (
    <div>
      <div className="messageInput">
        <span>メッセージ：</span>
        <input value={message} onChange={e => messageChange(e)}
        style={{ width: 250 }}/> <br/>
        <button onClick={e => send()}>送信</button>
        <h2>Your name: {userName}</h2>
      </div>
    </div>
  )
}

export default PostMessage