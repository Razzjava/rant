const express = require('express')
const app = express()
const PORT = 4000
const path = require('path')

app.use(express.static(path.join(__dirname,'../dist')))

app.listen(PORT, ()=>{
	console.log(`App listening on port ${PORT} `)
})