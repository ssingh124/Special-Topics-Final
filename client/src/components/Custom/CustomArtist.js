import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GET_ARTISTS } from '../../queries/index'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'

import Artist from '../listItems/Artist';

  const Custom = props =>{

    let { pid } = useParams();
    const { loading, error, data } = useQuery(GET_ARTISTS)
    if (loading) return 'Loading...'


    if (error) return `Errror! ${error.message}`
    return (




  <ul>
    
   {data.artists.map(({ id, firstName, lastName }) => (          
        (props.id === id)
        ?
        <Card key={id}>
          <CardContent>
         
          <Artist
                     key={id}
                 id={id}
                    firstName={firstName}
                     lastName={lastName}
                     action={"Home Page"}
                     Clink={"/"}
                  />
          </CardContent>
        </Card>
        :
        <span>
   

        
        </span>
      ))
     
    }
    
    </ul>

    )
}
export default Custom;








