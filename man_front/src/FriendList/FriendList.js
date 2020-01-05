import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
const jwt = require('jsonwebtoken')

const GET_FRIENDS = gql`
  query getFriends($authorId: String!){
    friendslist(
      authorId:$authorId
    ){
      id
      defaultName
      friendId
      chatRoomId
      permission
    }
  }
`
const friendslist = ({friends}) => {
  friends.map(e => (
  <div key={e.friendId}>
  <span>{e.defaultName}</span>
  </div>
))}

const FriendList = (props) => {
  const {userId, userName } = props.location.state
  const {loading, error, data} = useQuery(GET_FRIENDS,{variables:{authorId: userId}})
  const history = useHistory();
  const [friendsList, setFriendsList] = useState([])

  useEffect(() => {
    if(data){
      const list = data.friendslist
      console.log(list)
      setFriendsList(
        list.map(e =>{
          return (
            <div key={e.friendId} style={{margin:15,fontWeight:600}}>
              <span style={{marginRight:10, fontSize:20}}>{e.defaultName}</span>
              <button onClick={() =>handleClick(e)}>Go to Talk Room</button>
            </div>
          )      
        })
      )
    }
  }, [data])
  const handleClick = (e) =>{
    const pathId = jwt.sign({ 
      userId: userId, 
      userName: userName, 
      friendId: e.friendId, 
      friendName: e.defaultName,
      chatRoomId: e.chatRoomId,
      permission: e.permission,
      id:e.id,
    }, process.env.REACT_APP_PATH_KEY)
    history.push('/chat/'+pathId)
  }
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Your Friend List</h2>
      <div style={{textAlign:"center"}}>
        {friendsList}
      </div>
    </div>
  )
}

export default FriendList