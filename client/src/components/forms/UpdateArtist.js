import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { Button, TextField } from '@material-ui/core'

import { UPDATE_ARTIST } from '../../queries/index'

const UpdateArtist = props => {
  const [id] = useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [updateArtist] = useMutation(UPDATE_ARTIST)

  const updateStateVariable = (variable, value) => {
    props.updateStateVariable(variable, value)
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
    <form
      onSubmit={e => {
        e.preventDefault()
        updateArtist({
          variables: {
            id,
            firstName,
            lastName
          },
          optimisticResponse: {
            __typename: 'Mutation',
            updateArtist: {
              __typename: 'Artist',
              id,
              firstName,
              lastName
            }
          }
        })
        props.onButtonClick()
      }}
    >
      <TextField
        label='First Name'
        defaultValue={firstName}
        placeholder='i.e. Alin'
        onChange={e => updateStateVariable('firstName', e.target.value)}
        margin='normal'
        varian='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        defaultValue={lastName}
        placeholder='i.e. Mark'
        onChange={e => updateStateVariable('lastName', e.target.value)}
        margin='normal'
        varian='outlined'
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ margin: '10px' }}
      >
        Update Artist
      </Button>
      <Button
        onClick={props.onButtonClick}
        variant='contained'
        color='secondary'
        style={{ margin: '10px' }}
      >
        Cancel
      </Button>
    </form>
  )
}

export default UpdateArtist
