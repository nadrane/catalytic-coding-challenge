const router = require('express').Router()
const path = require('path')

module.exports = router
const {
  promisifiedRF,
  promisifiedWF,
  toJSON,
} = require('./api.utils')

router.get('/', async (req, res, next) => {
  try {
    res.json(await promisifiedRF(path.join(__dirname, '..', 'data/process.json')))
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const toUpload = toJSON(req.body)
    console.log(toUpload)
    await promisifiedWF(path.join(__dirname, '..', 'data/process.json'), toUpload)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
