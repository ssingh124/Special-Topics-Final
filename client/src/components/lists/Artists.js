
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ARTISTS } from '../../queries/index'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import Artist from '../listItems/Artist';





const Artists = () => {
    const { loading, error, data } = useQuery(GET_ARTISTS)
    if (loading) return 'Loading...'
    if (error) return `Errror! ${error.message}`
    return (

      <ul>
        {data.artists.map(({ id, firstName, lastName }) => (
          <Container key={id}>
            <List>
              <Artist
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                action= {"Learn More"}
                Clink={`/artists/${id}`}
              />
            </List>
          </Container>
        ))}
      </ul>
    )
  }
  
  export default Artists




