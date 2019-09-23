const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const cors = require('cors');

const NeDB = require('nedb');
const service = require('feathers-nedb');

const db = new NeDB({
  filename: './db-data/database.nedb',
  autoload: true
});

// Create an Express compatible Feathers application instance.
const app = express(feathers());

// Turn on JSON parser for REST services
app.use(express.json());

// Turn on CORS
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if ('OPTIONS' === req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({extended: true}));

// Enable REST services
app.configure(express.rest());

// Connect to the db, create and register a Feathers service.
app.use('/api/todo', service({
  Model: db,
  paginate: {
    default: 5,
    max: 100
  }
}));

// Event Handlers
let todoService = app.service('api/todo');;
todoService.on('created', (todo, context) => console.log('created', todo));
todoService.on('updated', (todo, context) => console.log('updated', todo));
todoService.on('removed', (todo, context) => console.log('removed', todo));

// Set up default error handler
app.use(express.errorHandler());

// Start the server.
const port = 5000;

app.listen(port, () => {
  console.log(`Feathers Todo server listening on port ${port}`);
});