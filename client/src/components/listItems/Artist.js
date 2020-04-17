
import React, { useState, Fragment } from 'react'
import {
Link
} from "react-router-dom";

import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import UpdateArtist from '../forms/UpdateArtist'
import RemoveArtist from '../buttons/RemoveArtist'

import Instruments from '../lists/Instruments'
import Card from '@material-ui/core/Card'

import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'





const Artist = props => {

  const { id } = props.id
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [editMode, setEditMode] = useState(false)
  const handleButtonClick = () => {
    setEditMode(!editMode)
  }

  const fullName = () => {
    return `${firstName} ${lastName}`
  }



  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        break
    }
  }



  return (
    <div>
     <Card>
       <CardContent>
      <Fragment>
      {editMode ? (
        <UpdateArtist
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <ListItem>
          <ListItemText primary={fullName()} />
          <Button
            onClick={() => setEditMode(true)}
            variant='contained'
            style={{ margin: '4px' }}
          >
            Edit
          </Button>
          <RemoveArtist
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
          />
           
       
      
        </ListItem>
      )}
      <Instruments artistId={props.id} />
        


      <CardActions>
        <Button>
                <Link to={props.Clink}>{props.action}</Link>
                </Button>
      </CardActions>


          </Fragment>
      
        </CardContent>
          </ Card>
       
  
    </div>
  )
}

export default Artist







