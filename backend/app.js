// const config = require('./utils/config')
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const usersRouter = require('./controllers/users')
// const loginRouter = require('./controllers/login')
// const rantsRouter = require('./controllers/rants')
// const middleware = require('./utils/middleware')
// const logger = require('./utils/logger')

// const mongoose = require('mongoose')
// mongoose.set('strictQuery', false)
// logger.info("connecting to mongoDB")
// mongoose.connect(config.MONGODB_URI)
//     .then(result => {
//         logger.info('connected to mongoDB')
//     })
//     .catch((error) => {
//         logger.info('error connecting to mongoDB')
//     })

// app.use(cors())
// // app.use(express.static('build'))
// app.use(express.json())
// app.use(middleware.requestLogger)
// app.use(middleware.tokenExtractor)

// app.use('/api/rants', middleware.userExtractor, rantsRouter)
// // app.use('/api/tasks', middleware.userExtractor, tasksRouter)
// app.use('/api/users', usersRouter)
// app.use('/api/login', loginRouter)

// app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

// module.exports = app     
