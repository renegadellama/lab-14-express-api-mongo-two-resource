'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const bodyParser = require('body-parser').json();

const app = module.exports = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ninja-env';

const ninjaRoutes = require('./routes/ninja-routes')(router);

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


app.use(bodyParser);
app.use(router);

app.listen(PORT, () => console.log(`Making port: ${PORT} great again!`));
