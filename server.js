const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const tasks = require('./routes/tasks');
const timers = require('./routes/timers');

const app = express();

app.use(express.json());

app.use('/api/timers', timers);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT}`.yellow.bold));