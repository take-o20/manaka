import React from 'react';
import './App.css';
// for graphQL
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// for routing
import { BrowserRouter, Route, Link } from "react-router-dom";

import  Home  from "./Home/Home"

// graphQL(database)との繋がり
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_END
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <div>
        <ul>
         <li><Link to='/'>Home</Link></li>
         {/* <li><Link to='/write'>Write</Link></li>  example */}
       </ul>
        <Route exact path='/' component={Home} />
        {/* <Route path='/write' component={Write} />  example */}
      </div>
    </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;
