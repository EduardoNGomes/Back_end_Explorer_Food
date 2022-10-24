const { verify } = require('jsonwebtoken')
const AppError = require('../utils/AppError')

const authConfig = require('../configs/auth')

function ensureAuthenticated(request, response, next) {}
