import React, {useState} from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'

import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

import { v4 as uuidv4 } from 'uuid'
import { ADD_INSTRUMENT, GET_INSTRUMENTS, GET_ARTISTS } from '../../queries/index'

const AddInstrument = props => {
  const [ id ] = useState(uuidv4())
  const [year, setYear] = useState('')
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [artistId, setArtistId] = useState('')





  const [addInstrument] = useMutation(ADD_INSTRUMENT, {
      update(cache, { data: { addInstrument } }) {
   
        const { instruments } = cache.readQuery({ query: GET_INSTRUMENTS })
        cache.writeQuery({
          query: GET_INSTRUMENTS,
          data: { instruments: instruments.concat([addInstrument])}
        })
      }
    }
  )




  const { loading, error, data } = useQuery(GET_ARTISTS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`


  return (
    <form onSubmit={e => {
      e.preventDefault()
      addInstrument({
        variables: {
          id, year, brand, type, price, artistId
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addInstrument: {
            __typename: 'Instrument',
            id, 
            year, 
            brand, 
            type, 
            price, 
            artistId
          }
        },
        update: (proxy, { data: { addInstrument } }) => {
          const data = proxy.readQuery({ query: GET_INSTRUMENTS })
          proxy.writeQuery({
            query: GET_INSTRUMENTS,
            data: {
              ...data,
              instruments: [...data.instruments, addInstrument]
            }
          })
        }
      })
    }}>
     <TextField
        label='Year'
        defaultValue={year}
        value={year}
        placeholder='i.e. 2020'
        onChange={e => setYear(e.target.value)}
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Brand'
        defaultValue={brand}
        value={brand}
        placeholder='i.e. Martin'
        onChange={e => setBrand(e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Type'
        defaultValue={type}
        value={type}
        placeholder='i.e. Acoustic Guitar'
        onChange={e => setType(e.target.value)}
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />
      <TextField
        label='Price'
        defaultValue={price}
        value={price}
        placeholder='i.e. 2000'
        onChange={e => setPrice(e.target.value)}
        type='number'
        margin='normal'
        variant='outlined'
        style={{ display: 'flex', margin: '10px' }}
      />



      <Select
        native
        defaultValue={artistId}
        value={artistId}
        onChange={e => setArtistId( e.target.value)}
        input={
          <OutlinedInput name='instrument' id="outlined-age-native-simple" />
        }
        style={{ display: 'flex', margin: '10px' }}
      >
        {data.artists.map(({ id, firstName, lastName }) => (
          <option value={id}>{firstName} {lastName}</option>
        ))}
      </Select>




      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ marginTop: '18px', alignItems: 'center', marginLeft: '10px' }}
      >
        Add Instrument
      </Button>



      
    </form>
  )
}

export default AddInstrument