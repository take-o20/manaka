import React from 'react'
import './Home.css'
import gql from "graphql-tag";
import { useQuery} from "@apollo/react-hooks";
import { useMutation } from '@apollo/react-hooks';

// this is grapqQL example
const GET_DATA = gql`
  {
    users{
      id
      name
    }
  }
`
const GET_USER = gql`
 query getUser($id: String!){
   user(id: $id){
     name
     email
   }
 }
`

export default function Home(props) {
  const userId = props.location.state.userId
  const userName = props.location.state.userName
  console.log(userId, userName)
  const { loading, error, data} = useQuery(GET_USER,{variables:{id: userId} })
  if(!loading){
    console.log(data.user)
  }
  return (
    <div>
      <h1 className="home-top">Hello, This is GrapqQL Example</h1>
      <div>
        <h2>Welcome to manaka</h2>
        {loading? <p>Loading ...</p>:
        <div>
        <p style={{color:"blue"}}>name: {data.user.name}</p>
        <p style={{color:"blue"}}>email: {data.user.email}</p>
        </div>
        }
      </div>
    </div>
  )
}