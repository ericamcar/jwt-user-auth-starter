const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

dotenv.config();

const app = express();

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => res.send('API is running...'))

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.inverse));