import React from 'react';
import './App.css';
// for graphQL
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, from } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from "apollo-link-error";

// for routing
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import  Home  from "./Home/Home"
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Auth from './Auth/Auth'
import Chat from './Chat/Chat'
import Ex from './Ex/Ex'
import Ex1 from './Ex1/Ex1'

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_END});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {}}) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME) || null,
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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors){
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
}
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: from([
    authMiddleware,
    otherMiddleware,
    errorLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Switch>
        {/* <Route exact path='/ex' component={Ex} /> */}
        <Route exact path='/ex1' component={Ex1}/>
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp} />
        <Auth>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path='/ex' component={Ex} />

            {/* <Route exact path="/page" component={Page}/> */}
          </Switch>
        </Auth>
      </Switch>
    </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;
