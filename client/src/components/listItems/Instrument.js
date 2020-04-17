import React, { useState, Fragment } from 'react'

import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Currency from 'react-currency-formatter'

import UpdateInstrument from '../forms/UpdateInstrument'
import RemoveInstrument from '../buttons/RemoveInstrument'

const Instrument = props => {

  const [ id ] = useState(props.id)
  const [year, setYear] = useState(props.year)
  const [brand, setBrand] = useState(props.brand)
  const [type, setType] = useState(props.type)
  const [price, setPrice] = useState(props.price)
  const [artistId, setArtistId] = useState(props.artistId)

  const [editMode, setEditMode] = useState(false)

  const handleButtonClick = () => {
    setEditMode(!editMode)
  }

  const fullInfo = () => {
    return `${brand} ${type} `
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'year':
        setYear(value)
        break
        case 'brand':
            setBrand(value)
            break
         case 'type':
         setType(value)
        break
        case 'price':
            setPrice(value)
         break
         case 'artistId':
            setArtistId(value)
         break
      default:
        break
    }
  }





  return (
    <div>
     
    
      {editMode ? (
      <UpdateInstrument
      id={props.id}
      year={props.year}
      brand={props.brand}
      type={props.type}
      price={props.price}
      artistId={props.artistId}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <ListItem>
        <ListItemText
          primary={fullInfo()}
          secondary={<Currency quantity={price} currency='CAD' />}
        />
        <Button
          onClick={handleButtonClick}
          variant='contained'
          style={{ margin: '5px' }}
        >
          Edit
        </Button>
        <RemoveInstrument
            id={id}
            year={year}
            brand={brand}
            type={type}
            price={price}
            artistId={artistId}
          />
           
       
      
        </ListItem>
      )}
     
          

  
    </div>
  )
}

export default Instrument
