import React, { useEffect, useState} from 'react'
import socketIOClient from 'socket.io-client'

const endpoint = process.env.REACT_APP_SOCKET_END
const socket = socketIOClient(endpoint)

const PostMessage = () => {
  const [message, setMessage] = useState('')
  return (
    <div>
      <h3>post message</h3>
    </div>
  )
}

export default PostMessage