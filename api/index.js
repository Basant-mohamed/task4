const express = require('express')
const app = express()
const cors = require('cors')
const movieArr = require('./control')
const routes = require('./routes.js')

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3000)