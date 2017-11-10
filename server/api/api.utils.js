const fs = require('fs')

const promisifiedRF = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(JSON.parse(data))
    })
  })

module.exports = {
  promisifiedRF,
}
