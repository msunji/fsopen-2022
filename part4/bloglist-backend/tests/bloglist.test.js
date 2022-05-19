const request = require('supertest');
const app = require('../app');
const db = require('./config/db');

const agent = request.agent(app);

beforeAll(async () => {
  jest.setTimeout(10000);
  await db.connect();
});

// test if the blog posts are in JSON format
test('Blog posts are returned as json', async () => {
  await agent
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

afterAll(() => {
  db.close();
});
