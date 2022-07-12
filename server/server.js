const express = require('express');
const app = express();
const path = require('path');

// add & import userData object with save info, and populate userList
const userData = {};
const userList = [];

app.get('/api/users', (req, res) => {
  return res.status(200).send(userList);
});

// builds on build req
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// listen on port 3000
app.listen(3000);