const express = require('express')

const app = express()

const routes = require('./routes')

app.use(express.json())

app.use(routes)

const PORT = 3333
app.listen(PORT, () => console.log(`Server ir running on port ${PORT}`))
