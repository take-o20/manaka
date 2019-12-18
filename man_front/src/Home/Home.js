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
const CREATE_USER = gql`
  mutation CreateUser($name: String!){
    createUser(data:{name: $name}){
      id
      name
    }
  }
`

export default function Home() {
  // query
  const { loading, error, data } = useQuery(GET_DATA);
  if(!loading){
    console.log("aaaaaaaaa",data)
  }

  //mutation
  const [ createUser, {data2}] = useMutation(CREATE_USER);
  let input;
  return (
    <div>
      <h1 className="home-top">Hello, This is GrapqQL Example</h1>
      <div>
        <h2>This is Query Example.</h2>
        {loading? <p>Loading ...</p>:
        <div>
        <p style={{color:"blue"}}>name: {data.users[0].name}</p>
        <p style={{color:"blue"}}>id: {data.users[0].id}</p>
        </div>
        }
      </div>
      <div>
        <form
          onSubmit={e => {
          e.preventDefault();
          createUser({ variables: {name: input.value} });
          input.value = '';
          }}
        >
          <td align="right"><b> name：</b></td>
          <td>
          <input
            ref={node => {
              input = node;
            }}
          />
          </td>
          <td><button type="submit">Add User</button></td>
        </form>
        <h2>Above is Mutation Example.</h2>
      </div>
    </div>
  )
}