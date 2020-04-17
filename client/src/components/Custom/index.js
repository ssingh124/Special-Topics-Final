import React from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'

import CustomArtist from './CustomArtist'
  const Custom = () =>{

    let { id } = useParams();
return(
    <CustomArtist
    id={id}
    />
)
}
export default Custom;














