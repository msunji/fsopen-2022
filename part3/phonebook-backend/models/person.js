const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose
  .connect(url)
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.log('error connecting:', err);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, 'Name must be at least three letters long.'],
  },
  number: String,
});

personSchema.set('toJSON', {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
