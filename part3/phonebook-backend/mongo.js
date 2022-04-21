const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
  process.exit(1); // this exits with a failure code
}

// const password = process.argv[2];

mongoose.connect(process.env.MONGODB_URI);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

Person.find({}).then((res) => {
  res.forEach((person) => {
    console.log(person);
  });
  mongoose.connection.close();
});

person.save().then((res) => {
  console.log(
    `addded ${process.argv[3]} number ${process.argv[4]} to phonebook`
  );
  mongoose.connection.close();
});
