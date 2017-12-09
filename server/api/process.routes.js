// I would make a routes folder personally.

const router = require('express').Router()
const path = require('path')

module.exports = router
const {
  promisifiedRF,
  promisifiedWF,
  toJSON,
} = require('./api.utils')

// You're just dumping everything to the client??
// At the very least maybe only send back process associated with a specific user?
// This surprises me I guess.
router.get('/', async (req, res, next) => {
  try {
    res.json(await promisifiedRF(path.join(__dirname, '..', 'data/process.json')))
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    // Echoing my comment above. You're going to let the client overwrite your entire DB!???
    // You should only allow put on specific process records
    // If they don't have a unique id, add one
    // You need an API to provision access and define allowable operations and to ensure
    // that the DB schema is not destroyed.
    const toUpload = toJSON(req.body)
    console.log(toUpload)
    await promisifiedWF(path.join(__dirname, '..', 'data/process.json'), toUpload)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
