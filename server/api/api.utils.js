const fs = require('fs')

const promisifiedRF = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(JSON.parse(data))
    })
  })

const promisifiedWF = (path, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf-8', (err) => {
      if (err) reject(err)
      else resolve()
    })
  })

const toJSON = str => JSON.stringify(str, null, 4)

module.exports = {
  promisifiedRF,
  promisifiedWF,
  toJSON,
}
