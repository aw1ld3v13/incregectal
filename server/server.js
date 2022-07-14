const express = require('express');
const app = express();
const path = require('path');
// const apiRouter = require('./routes/api');
const PORT = 3000;
const apiRouter = express.Router();
const userController = require('./controllers/userController');

// parse request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/client', express.static(path.resolve(__dirname, '../client')));

app.use('/api', apiRouter);

// create a user in the db
// userRouter

apiRouter.post('/signup', userController.createUser, (req, res) => {
  res.send( { users: res.locals.newUser })
});

// app.use('/api/signup', userController.userCreator, (req, res) => 
//   res.status(200).json({ newUser: res.locals.newUser })
// );

// app.get('/api/users', (req, res) => {
//   return res.status(200).send(userList);
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