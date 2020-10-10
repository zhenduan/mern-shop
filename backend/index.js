const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
require('dotenv').config();
const connectDB = require('./database/db');
const colors = require('colors');
// import connectDB from './database/db.js';
// connectDB() = require('./database/db.js');

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
// mongoose
//   .connect(process.env.DB, { useNewUrlParser: true })
//   .then(() => console.log(`Database connected successfully`))
//   .catch((err) => console.log(err));

// //since mongoose promise is depreciated, we overide it with node's promise
// mongoose.Promise = global.Promise;
connectDB();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// app.use((req, res, next) => {
//   res.send('Welcome to Express');
// });

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
