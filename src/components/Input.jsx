import React, {useState, useEffect} from 'react'
import Rating from './Rating'
import Message from './Message'
import { v4 as uuidv4 } from 'uuid';
import {Button, TextField, makeStyles} from '@material-ui/core'

const styles = makeStyles({
	input:{
		color:'white'
	}
})

function Input (){
	const [message, setMessage] = useState('')
	const [display, setDisplay]  = useState([])
	const classes = styles()
	
	useEffect(()=>{
		fetch('https://rant-server.razzjava.repl.co/rants').then(res=>{
			return res.json()
		}).then(data=>{
			const newData = Object.values(data)
			const objData = []
			newData.forEach(element=>{
				objData.push(JSON.parse(element))
			})
			setDisplay(objData)
			
		})
	}, [])

	const handleMessage = (e)=>{
		setMessage(e.target.value)
	}

	const submitMessage = ()=>{
		const newMessage  = {rant:message, id:uuidv4(), likes:0, dislikes:0, reports:0}
		setDisplay([newMessage,...display])
		
		
	}

	const handleSubmit = (e)=>{
		e.preventDefault()
		const rant = display[0]

		fetch('https://rant-server.razzjava.repl.co/rants', {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(rant)
		})
		setMessage('')
		
	}
	return (
		<>
		<form onSubmit={handleSubmit} className='input'>
			<TextField 
			value={message} 
			multiline
			inputProps={{className:classes.input}}
			fullWidth
			type='text'
			rows={4} 
			color="secondary"
			placeholder="enter rant here"
			variant="outlined"
			label="Enter Rant"
			onChange={handleMessage} 
			name='rant' 
			id='rant'/>
			<Button type="submit" onClick={submitMessage} variant="contained" color="secondary">Share</Button>
		</form>	

			<Message display={display}/>
			

		</>
	);
}

export default Input;