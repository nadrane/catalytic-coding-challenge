const request = require('supertest')
const app = require('../index')

describe('Test the root path', () => {
  test('it should respond with GET', async (done) => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    done()
  })
})
