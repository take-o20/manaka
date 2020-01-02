import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import Messages from '../Messages/Messages'
import PostMessage from '../PostMessage/PostMessage'

const Chat = (props) => {
  console.log(props)
  const endpoint = process.env.REACT_APP_SOCKET_END
  const [color, setColor] = useState('white')
  const [message, setMessage] = useState()
  const send = () => {
    const socket = socketIOClient(endpoint);
    socket.emit('change color', color);
    setMessage("hellor")
  }
  useEffect(() => {
    const socket = socketIOClient(endpoint);
    // setInterval(send(), 1000)
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
    })
  })
  const socket = socketIOClient(endpoint)
  socket.on('change color', (col) => {
    document.body.style.backgroundColor = col
  })

  return(
    <div style={{ textAlign: "center"}}>
      <h2> User Name</h2>
      <button onClick={()=> send()}>Change Color</button>
      <button id="blue" onClick={()=>setColor('blue')}>Blue</button>
      <button id="red" onClick={()=>setColor('red')}>Red</button>

      <p>{message}</p>
      <Messages />
      <PostMessage />
    </div>
  )
}

export default Chat