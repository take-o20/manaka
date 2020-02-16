import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import './FriendList.css'
import Chat from '../Chat/Chat'
import SplitPane, { Pane } from 'react-split-pane';
import ScrollUp from "../Messages/ScrollUp"
const GET_FRIENDS = gql`
  query getFriends($authorId: String!){
    friendslist(
      input:{authorId:$authorId}
    ){
      id
      firstName
      lastName
      friendId
      chatRoomId
      permission
    }
  }
`
const friendslist = ({friends}) => {
  friends.map(e => (
  <div key={e.friendId}>
  <span>{e.firstName}</span>
  </div>
))}

const FriendList = (props) => {
  const {userId, userName } = props.location.state
  const {loading, error, data} = useQuery(GET_FRIENDS,{variables:{authorId: userId}})
  const history = useHistory();
  const [friendsList, setFriendsList] = useState([])
  const [onChat, setOnchat] = useState(false)
  const [chatRoomId, setChatRoomId] = useState()
  const [permission, setPermission] = useState(false)
  const [friendId, setFriendId] = useState()
  useEffect(() => {
    if(data){
      const list = data.friendslist
      console.log(list)
      setFriendsList(
        list.map(e =>{
          return (
            <div key={e.friendId} className="friend">
              <img src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" alt="friendphoto" className="friendPhoto"/>
              <div className="friendName">{e.lastName} {e.firstName}</div>
              <button 
                className="buttonArea"
                onClick={() =>handleClick(e)}
              >
                </button>
            </div>
          )      
        })
      )
    }
  }, [data])
  const handleClick = (e) =>{
    const {id, firstName, lastName, friendId, chatRoomId, permission} = e
    setChatRoomId(chatRoomId)
    setPermission(permission)
    setFriendId(id)
    setOnchat(true)
  }
  return (
    <div className="friends">
      <div className="friendlist" style={{overflow:"scroll"}}>
        <h2 className="recent">Recent</h2>
        {friendsList}
      </div>

      <div className="chat">
        {onChat ? <Chat chatRoomId={chatRoomId} permission={permission} id={friendId} myId={userId}/> :null}
      </div>
    </div>
  )
}

export default FriendList