import React, {useState} from 'react'
import {IconButton} from '@material-ui/core'
import {ThumbUp, ThumbDown} from '@material-ui/icons'

function Rating ({likes, dislikes, id}){
	const [like, setLike] = useState(likes)
	const [dislike, setDislike] = useState(dislikes)

	const handleLike = () =>{
		setLike(like + 1)
	}

	const submitLike = (e)=>{
		e.preventDefault()

		const data = { like, id }

		fetch('https://rant-server.razzjava.repl.co/likes', {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(data)
		})
	}

	const handleDislike = ()=>{
		setDislike(dislike+1)
	}

	const submitDislike = (e)=>{
		e.preventDefault()
		const data = { dislike, id }

		fetch('https://rant-server.razzjava.repl.co/dislikes', {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(data)
		})
	}

	return (
		<div className='rating'>
		<form onSubmit={submitLike}>
			<IconButton onClick={handleLike} color="secondary">
				<ThumbUp />
			</IconButton>
		</form>	
			<p>{like}</p>
		<form onSubmit={submitDislike} >	
			<IconButton onClick={handleDislike} color="secondary">
				<ThumbDown />
			</IconButton>
		</form>	
			<p>{dislike}</p>
		</div>
	)
}

export default Rating