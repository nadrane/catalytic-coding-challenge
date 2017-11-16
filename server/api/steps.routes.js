const router = require('express').Router()
const path = require('path')

module.exports = router
const {
  promisifiedRF,
  promisifiedWF,
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
    const toUpload = JSON.stringify([
      ...initialData.filter(step => step.roleID !== passedData.roleID),
      passedData,
    ].sort((a, b) => a.stepNumber - b.stepNumber), null, 4)
    await promisifiedWF(path.join(__dirname, '..', 'data/steps.json'), toUpload)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})
