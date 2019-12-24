import React from 'react';
import './App.css';
// for graphQL
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, from } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// for routing
import { BrowserRouter, Route, Link } from "react-router-dom";

import  Home  from "./Home/Home"
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import LoginedExample from './LoginedExample/LoginedExample'

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_END});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {}}) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
    }
  }));
  return forward(operation);
})
const otherMiddleware = new ApolloLink((operation, forward) => {
  // add the recent-activity custom header to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'recent-activity': localStorage.getItem('lastOnlineTime') || null,
    }
  }));
  return forward(operation);
})

const client = new ApolloClient({
  link: from([
    authMiddleware,
    otherMiddleware,
    httpLink
  ]),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div>
        <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/login'>Login</Link></li>
         <li><Link to='/signup'>SignUp</Link></li>
         {/* <li><Link to='/write'>Write</Link></li>  example */}
       </ul>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp} />
        {/* <Route path='/write' component={Write} />  example */}
      </div>
    </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;
