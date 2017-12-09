// These should really be in their own folder.
// Its weird to have them side by side with the routes
const request = require('supertest')
const app = require('../index')

describe('Test the root path', () => {
  test('it should respond with GET', async (done) => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    done()
  })
  test('GET /process', async (done) => {
    const response = await request(app).get('/api/process')
    expect(response.statusCode).toBe(200)
    expect(typeof JSON.parse(response.text)).toBe('object')
    done()
  })
})
