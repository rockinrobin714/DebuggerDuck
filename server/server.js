const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./util/router.js');
const db = require('./db/schemas.js');
const dbConnection = require('./db/connection.js')

// Use express and export it
const app = express();
module.exports.app = app;

// Use body-parser for parsing JSON in the request body
app.use(bodyParser.json());

// Serve the static client HTML files
app.use(express.static(path.join(__dirname, '/../client/public')));
// Serve the static client React files
app.use('/dist', express.static(path.join(__dirname, '/../client/dist')));
// Serve the node modules
app.use('/lib', express.static(path.join(__dirname, '/../node_modules')));

// Listen for requests on /api and then use the router to determine
// what happens with the requests
app.use('/api', router);

// Check to see if there is a port environment variable or just use port 4040 instead
const port = process.env.PORT || 4040;

// Start the actual server listening on the port variable
app.listen(port, function (err) {
  // If there is an error log it
  if (err) { console.error(err); }
  // If there is not an error console log what port the server is running on
  else { console.log('Server running on port %s', port) }
})