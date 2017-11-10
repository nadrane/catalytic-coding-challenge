const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 8080

const app = express()
module.exports = app
const createApp = () => {
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static(path.join(__dirname, '..', 'node_modules')))
  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })
  app.listen(PORT, () => console.log(`Choo Choo all aboard port${PORT}`))
}

createApp()
