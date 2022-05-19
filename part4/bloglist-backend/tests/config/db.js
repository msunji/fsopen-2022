const mongoose = require('mongoose');
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
  });
};

// Close connection to DB and server
const close = async () => {
  await mongoose.disconnect();
  await testDB.stop();
};

module.exports = {
  connect,
  close,
};
