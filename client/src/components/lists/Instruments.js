
import React, {useState} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_INSTRUMENTS } from '../../queries/index';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Instrument from '../listItems/Instrument';





const Instruments = props => {
    const [artistId] = useState(props.artistId)
 
    const { loading, error, data } = useQuery(GET_INSTRUMENTS)
    if (loading) return 'Loading...'
    if (error) return `Errror! ${error.message}`
    return (
    //   <div>HELO</div>
        <ul>
        {
          data.instruments.map(({ id, year, brand, type, price, artistId }) => (          
            (props.artistId === artistId) ?
            <Card key={id}>
              <CardContent>
                <Instrument
                  key={id}
                  id={id}
                  year={year}
                  brand={brand}
                  type={type}
                  price={price}
                  artistId={artistId}
                />
              </CardContent>
            </Card>
            :
            <span></span>
          ))
        }
      </ul>

     
    )
  }
  
  export default Instruments




