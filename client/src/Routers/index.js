import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../App'
import Title from '../components/layout/Title'
import Custom from '../components/Custom/index'


import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'




const Routers = () => {

    const client = new ApolloClient({
        link: createHttpLink({uri:'http://localhost:4000/graphql'}),
        cache: new InMemoryCache()
      })
      return(
        <ApolloProvider client={client}>
  <Router>
   <div>
    <Route exact path='/'>
        <App />
      </Route>
      <Route exact path='/title'>
        <Title />
      </Route>
      <Route exact path='/artists/:id'>
        <Custom />
      </Route>
    
 
</div>  </Router>
</ApolloProvider>
)}

export default Routers
