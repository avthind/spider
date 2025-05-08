// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const auth = require('./routes/auth');
const tasks = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/tasks', tasks);

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(5000, () => console.log('Server running on port 5000')))
.catch(err => console.log(err));