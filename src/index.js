const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-yatii.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
})
mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo');

})

mongoose.connection.on('error', () => {
  console.error('Error connecting to Mongo'), err;

})
app.get('/', (req, res) => {
  res.send('Hi there')
});

app.listen(3000, () => {
  console.log('listening on port 3000')
})