import React ,{ useState, useEffect } from 'react'
import socketIoClient from 'socket.io-client'
import './Messages.css'

const endpoint = process.env.REACT_APP_SOCKET_END

const Messages = ({
  userId, userName, friendId, friendName, chatRoomId
}) => {
  const socket = socketIoClient.connect(endpoint)
  const [logs, setLogs] = useState([])
  const [messages, setMessages] = useState()
  socket.emit("client_to_room_join",{room: chatRoomId, name:userName})
  useEffect(() => {
    socket.on("server_to_client_message", (obj)=> {
      const log = logs
      obj.key = 'key_' + (log.length+1)
      log.unshift(obj)
      setLogs(log)
      setMessages(
        logs.map(e => {
          let kind
          if(e.name === userName){
            kind = "yourMessage"
          }else{
            kind = "friendMessage"
          }
          return(
          <div key={e.key} className={kind}>
            <span>{e.message}</span>
            <p/>
          </div>
        )})
      )
    });
  }, [])
  return (
    <div>
      {messages}
    </div>
  )
}

export default Messages