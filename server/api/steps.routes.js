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
    res.json(await promisifiedRF(path.join(__dirname, '..', 'data/steps.json')))
  } catch (error) {
    next(error)
  }
})

router.put('/:roleID', async (req, res, next) => {
  try {
    const passedData = req.body
    const initialData = await promisifiedRF(path.join(__dirname, '..', 'data/steps.json'))
    const toUpload = toJSON([
      // you should be using initialData.find because you only need 1 result
      ...initialData.filter(step => step.roleID !== passedData.roleID),
      passedData,
    ].sort((a, b) => a.stepNumber - b.stepNumber)) // Do we really need to maintain this sorting?

    // path.join(__dirname, '..', 'data/steps.json') - you should really store these paths in variables, esspecially because they are reused.
    await promisifiedWF(path.join(__dirname, '..', 'data/steps.json'), toUpload)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
