const fs = require('fs')

// I would avoid abbreviations like RF and WF.
// Personal preference somewhat, but it can be confusing for readers
// More importantly, the name is not accurate. it reads and parses.
// Lastly, util.promisify will do this for you in Node 8

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

// inserting spacing into your responses might seem nice in theory to help with debugging,
// but you're unnecessarily bloating EVERY network response. Remember the network is slow
// If you want a readable response, use tooling like https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US
const toJSON = str => JSON.stringify(str, null, 4)

module.exports = {
  promisifiedRF,
  promisifiedWF,
  toJSON,
}
