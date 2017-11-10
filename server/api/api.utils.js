const fs = require('fs')

const promisifiedRF = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

module.exports = {
  promisifiedRF,
}
