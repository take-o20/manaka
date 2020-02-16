import React ,{ useState, useEffect,useRef } from 'react'
import socketIoClient from 'socket.io-client'
import './Messages.css'
import moment from 'moment'

const endpoint = process.env.REACT_APP_SOCKET_END

const Messages = ({
  userId, userName, friendId, friendName, chatRoomId, myId,
}) => {
  const socket = socketIoClient.connect(endpoint)
  const [logs, setLogs] = useState([])
  const [messages, setMessages] = useState()
  const bottomRef = useRef(null);
  socket.emit("client_to_room_join",{room: chatRoomId, name:myId})
  useEffect(() => {
    socket.on("server_to_client_message", (obj)=> {
      const log = logs
      console.log("aaaaaaa",logs)
      obj.key = 'key_' + (log.length+1)
      log.push(obj)
      setLogs(log)
      setMessages(
        logs.map(e => {
          let kind
          let time
          let pad
          if(e.name === myId){
            kind = "yourMessage"
            time = "yourMessageTime"
            pad = "yourPad"
          }else{
            kind = "friendMessage"
            time = "friendMessageTime"
            pad = "friPad"
          }
          return(
            <div className="message">
              {kind==="friendMessage"?(
                 <img src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" alt="friendphotoChat" className="photo"/>
              ):null}
              <div className={pad}>
              <div key={e.key} className={kind}>
                {e.message}
              </div>
              <span className={time}>{moment(e.time).format('hh:mm A ｜ MMM DD')}</span>
              </div>
            </div>
        )})
      )
      onButtonClick()
    });
  }, [])
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    // bottomRef.current.focus();
    bottomRef.current.scrollIntoView();
  };
  return (
    <div style={{height:"60vh", overflowY: "scroll"}}>
      {messages}
      <div ref={bottomRef} />
    </div>
  )
}
export default Messages