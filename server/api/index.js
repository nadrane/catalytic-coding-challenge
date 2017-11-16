const router = require('express').Router()
const path = require('path')
const stepsRouter = require('./steps.routes')

module.exports = router
const {
  promisifiedRF,
} = require('./api.utils')

router.use('/steps', stepsRouter)

router.get('/process', async (req, res, next) => {
  try {
    res.json(await promisifiedRF(path.join(__dirname, '..', 'data/process.json')))
  } catch (error) {
    next(error)
  }
})

router.get('/users', async (req, res, next) => {
  try {
    res.json(await promisifiedRF(path.join(__dirname, '..', 'data/users.json')))
  } catch (error) {
    next(error)
  }
})
