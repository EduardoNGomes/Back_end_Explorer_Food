require('dotenv/config')

require('express-async-errors')
const AppError = require('./utils/AppError')
const uploadConfig = require('./configs/upload')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/plates', express.static(uploadConfig.UPLOAD_FOLDER))
app.use(express.static(path.resolve(__dirname, 'assets', 'images')))

app.use(routes)
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  console.log(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {})
