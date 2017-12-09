const router = require('express').Router()
const path = require('path')
const bodyParser = require('body-parser')

const processRouter = require('./process.routes')
const stepsRouter = require('./steps.routes')

module.exports = router

// Use util.promisify as discussed in other file
const {
  promisifiedRF,
} = require('./api.utils')

router.use(bodyParser.json())

// You almost certainly don't need this.
// Never use lines of code if you don't know what they do.
router.use(bodyParser.urlencoded({ extended: true }))

// Why do steps and processes get their own routers but users don't?
router.use('/steps', stepsRouter)
router.use('/process', processRouter)

router.get('/users', async (req, res, next) => {
  try {
    res.json(await promisifiedRF(path.join(__dirname, '..', 'data/users.json')))
  } catch (error) {
    next(error)
  }
})
