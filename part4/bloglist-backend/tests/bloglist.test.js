const request = require('supertest');
const app = require('../app');
const db = require('./config/db');
const Blog = require('../models/blog');

const agent = request.agent(app);

const testBlog = {
  title: 'Apple Cinnamon Rolls with Brown Butter Maple Icing',
  author: 'Tieghan Gerard',
  url: 'https://www.halfbakedharvest.com/apple-cinnamon-rolls/',
  likes: 15,
};

const blogs = [
  {
    title: 'Testing with MongoDB-Memory-Server',
    author: 'Malcolm R. Kente',
    url: 'https://dev.to/remrkabledev/testing-with-mongodb-memory-server-4ja2',
    likes: 12,
  },
  {
    title: 'Setup in-memory database for testing Node.js and Mongoose',
    author: 'Dmytro Rykhlyk',
    url: 'https://dev.to/ryuuto829/setup-in-memory-database-for-testing-node-js-and-mongoose-1kop',
    likes: 10,
  },
];

// test if the blog posts are in JSON format
describe('GET /api/blogs', () => {
  beforeAll(async () => {
    db.connect();
  });
  afterEach(async () => {
    db.clear();
  });
  afterAll(async () => {
    db.close();
  });

  test('Blog posts are returned as json', async () => {
    await agent.post('/api/blogs').send(testBlog);
    await agent
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
});

// POST
describe('POST /api/blogs', () => {
  beforeAll(async () => {
    db.connect();
  });
  afterEach(async () => {
    db.clear();
  });
  afterAll(() => {
    db.close();
  });

  test('There is a UID property', async () => {
    const res = await agent.post('/api/blogs').send(testBlog);
    expect(res.body.id).toBeDefined();
  });

  test('Creates a new database entry', async () => {
    const res = await agent.post('/api/blogs').send(testBlog);
    expect(res.body).toBeTruthy();
  });

  test('Returns status code 400 when creating a new entry missing title and url properties', async () => {
    const emptyBlog = testBlog;
    delete emptyBlog.title;
    delete emptyBlog.url;

    agent.post('/api/blogs').send(emptyBlog).expect(400);
  });

  test('Returns a default value of 0 for likes when creating a new entry with a missing likes property', async () => {
    const blog = {
      title: 'Testing with MongoDB-Memory-Server',
      author: 'Malcolm R. Kente',
      url: 'https://dev.to/remrkabledev/testing-with-mongodb-memory-server-4ja2',
    };

    const res = await agent.post('/api/blogs').send(blog);
    expect(res.body.likes).toBe(0);
  });
});

// DELETE
describe('DELETE /api/blogs/:id', () => {
  beforeAll(async () => {
    db.clear();
    db.connect();
    // Seed the database
    await Blog.create(blogs);
  });
  afterAll(() => {
    db.close();
  });

  test('Returns status code of 204 if id is valid', async () => {
    const testBlogs = await Blog.find({});
    const blogToDelete = testBlogs[0].id;

    const res = await agent.delete(`/api/blogs/${blogToDelete}`);
    expect(res.status).toBe(204);
  });
});

//  Update the amount of likes for a blog post
describe('PUT /api/blogs/:id', () => {
  beforeEach(async () => {
    db.connect();
    // Seed the database
    await Blog.create(blogs);
  });
  afterAll(() => {
    db.clear();
    db.close();
  });

  test('Updates the number of likes for a blog post', async () => {
    const blog = await Blog.find({
      title: 'Testing with MongoDB-Memory-Server',
    });

    let blogId = blog[0].id;

    console.log(blogId);

    const res = await agent.put(`/api/blogs/${blogId}`).send({ likes: 42 });

    console.log('put results', res.body);

    expect(res.body.likes).toBe(42);
  });
});
