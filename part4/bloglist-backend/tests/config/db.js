const mongoose = require('mongoose');
const Blog = require('../../models/blog');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { error } = require('../../utils/logger');

let testDB;

// Connect to test DB
const connect = async () => {
  await mongoose.disconnect();
  testDB = await MongoMemoryServer.create();

  const testUri = testDB.getUri();

  await mongoose.connect(testUri, (err) => {
    if (err) {
      error(err);
    }
    console.log('Connected to test db');
  });
};

// Close connection to DB and server
const close = async () => {
  await mongoose.disconnect();
  await testDB.stop();
};

// Clear database
const clear = async () => {
  const collections = await mongoose.connection.collections;

  for (let key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};

module.exports = {
  connect,
  close,
  clear,
};
