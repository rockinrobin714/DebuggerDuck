const db = require('../db/schemas.js');

const buildResObj = function (data) {
  return {
    data: data
  }
}

module.exports = {
  login: {
    // Login controller functions for GET
    get: (req, res) => {
      console.log('Login GET');
      res.send(200);
    },
    // Login controller functions for GET
    post: (req, res) => {
      console.log('Login POST');
      res.send(200);
    }
  },
  group: {
    // Group controller functions for GET
    get: (req, res) => {
      db.Group.find().exec()
        .then((groups) => {
          let response = buildResObj(groups);
          res.status(200).send(response);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(400);
        })
    },
    // Group controller functions for GET
    post: (req, res) => {
      // Look in the database to see if there is a Group with the given name already
      db.Group.findOne({'name': req.body.data.groupName}).exec()
      .then((data) => {
        console.log(data)
        // If we don't get any data, add the request body into the database
        if(!data) {
          new db.Group({name: req.body.data.groupName}).save()
          .then((data) => {
            console.log(data);
            // Send a 201 status that it was completed
            res.sendStatus(201);
          })
          // Catch the error and log it in the server console
          .catch((err) => {
            console.error(err);
            res.sendStatus(400);
          })
        }
        else {
          // Send a 401 status and a message that the group is already added the database
          res.status(401).send('Group is already in the database.')
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  volunteer: {
    // Volunteer controller functions for GET
    get: (req, res) => {
      db.Order.find().exec()
        .then((volunteers) => {
          let response = buildResObj(volunteers);
          res.status(200).send(response);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(400);
        })
    },
    // Volunteer controller functions for POST
    post: (req, res) => {
      console.log('Volunteer POST');
      res.send(200);
    }
  },
  request: {
    // Request controller functions for POST
    post: (req, res) => {
      console.log('Request POST');
      res.send(200);
    }
  }
}