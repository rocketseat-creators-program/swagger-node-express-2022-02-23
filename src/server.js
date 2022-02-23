const express = require('express')

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./routes')(app)

app.listen(port, () => console.log(`Running at http://localhost:${port}`))