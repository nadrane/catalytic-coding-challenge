const router = require('express').Router()
const path = require('path')

module.exports = router
const {
  promisifiedRF,
} = require('./api.utils')

router.get('/', async (req, res, next) => {
  try {
    res.json(await promisifiedRF(path.join(__dirname, '..', 'data/steps.json')))
  } catch (error) {
    next(error)
  }
})

router.put('/:roleID', async (req, res, next) => {
  try {
    const initialData = await promisifiedRF(path.join(__dirname, '..', 'data/steps.json'))
    console.log(initialData)
  } catch (error) {
    next(error)
  }
})
