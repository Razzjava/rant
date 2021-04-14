import React, {useState} from 'react'
import { Container, Grid, Card, CardHeader, CardContent, IconButton, Typography } from '@material-ui/core'
import {Report} from '@material-ui/icons'
import Rating from './Rating'

function RantCard ({element}){
	const [reports, setReports] = useState(0)

	return (
		<div className="the-card">
			<Card >
				<CardHeader 
				action={
					<IconButton onClick={()=>(
						setReports(reports+1)
					)}>
						<Report />
						{reports}
					</IconButton>
				}
				/>
				<CardContent>
					<Typography variant="body1"  >
						{element.rant}
					</Typography>
				</CardContent>

				<Rating 
				likes={element.likes} 
				dislikes={element.dislikes}
 				id={element.id}/>

			</Card>
		
		</div>
	)
}

export default RantCard;