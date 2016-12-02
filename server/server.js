const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./util/router.js');
const db = require('./db/schemas.js')
const dbConnection = require('./db/connection.js')

// Use express and export it
const app = express();
module.exports.app = app;

// Use body-parser for parsing JSON in the request body
app.use(bodyParser.json());

//***How to insert something in the DB:
// let example = new db.user({ username:'blablabla2', pic:'blablabla2', groups:{group_id: '12345MKS', }});
// example.save();
// let example2 = new db.group({ name:'super awesome group'});
// example2.save();
// let example3 = new db.order({ group_id: '12345MKS', location:'Chipotle', time:'1:00PM', groups:{group_id: '12345MKS', }});
// example3.save();
//Still not sure how to update requests on the order, try googling findOneAndUpdate();

// Serve the static client HTML files
app.use(express.static(path.join(__dirname, '/../client/public')));
// Serve the static client React files
app.use('/dist', express.static(path.join(__dirname, '/../client/dist')));
// Serve the node modules
app.use('/node_modules', express.static(path.join(__dirname, '/../node_modules')));

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