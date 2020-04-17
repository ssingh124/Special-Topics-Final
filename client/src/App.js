import React from 'react'

import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import Container from '@material-ui/core/Container'
import './App.css'

import AddArtist from './components/forms/AddArtist'
import AddInstrument from './components/forms/AddInstrument'
import Artists from './components/lists/Artists'
import Title from './components/layout/Title'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Container className='App'>
      <Title />
      <AddArtist />
      <AddInstrument />
      <Artists />
    </Container>
  </ApolloProvider>
)

export default App
