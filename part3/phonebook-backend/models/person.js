const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose
  .connect(url)
  .then((res) => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.log('error connecting:', err.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, 'Name must be at least three letters long.'],
  },
  number: {
    type: String,
    validate: {
      validator: function (val) {
        //eslint-disable-next-line
        return /^\d{2,3}[\-]/.test(val);
      },
      message: (props) => `${props.value} isn't a valid phone number.`,
    },
    required: true,
    minLength: [8, 'Number needs to be 8 digits or longer.'],
  },
});

personSchema.set('toJSON', {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
