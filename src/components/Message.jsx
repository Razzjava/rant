import React from 'react'
import { Container, Grid, Card, CardHeader, CardContent, IconButton } from '@material-ui/core'
import {Report} from '@material-ui/icons'
import RantCard from './RantCard'

function Message ({display}){
	return (
		<Container>
		<Grid container spacing={6}>
			{display.map(element=>(
	  <Grid item md={6} as={12} key={element.id}>
		<RantCard element={element} />
		</Grid>))}

		
		</Grid>
		</Container>

	)
}

export default Message

