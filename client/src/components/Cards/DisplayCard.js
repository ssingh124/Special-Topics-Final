import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles({
  card: {
    minWidth: '275px',
    margin: '20px'
  },
  bullet: {
    display: 'flex',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

const DisplayCard = ({ children, style }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card} style={style}>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default DisplayCard
