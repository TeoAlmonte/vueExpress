const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/Routes');
const config = require('./config/config')
const app = express();

mongoose.connect(config.db)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes)

app.listen(config.port)
