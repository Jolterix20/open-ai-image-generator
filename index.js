// Importing libs
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// Importing routes
const openaiRoutes = require('./routes/openaiRoutes')

// Creating express app
const app = express()

// Enable body parser for reading forms
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Using routes
app.use('/openai', openaiRoutes)

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
