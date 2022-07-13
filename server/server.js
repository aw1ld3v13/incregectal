const express = require('express');
const app = express();
const path = require('path');
const apiRouter = require('./routes/api');
const PORT = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:123@incregectal-db.66xbi.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// parse request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const userRouter = express.Router;
app.use('/users', userRouter);

// 
app.get('/api/users', (req, res) => {
  return res.status(200).send(userList);
});

// builds on build req
// app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

// catch-all route handler
app.use((req, res) => res.status(404).send('whos lora lets? (404)'))

// based express error handler <3
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listen on port 3000
app.listen(PORT);

module.exports = app;