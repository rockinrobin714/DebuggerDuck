const db = require('../db/schemas.js');

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
      req.body.data
    },
    // Group controller functions for GET
    post: (req, res) => {
      // Look in the database to see if there is a Group with the given name already
      db.Group.findOne({'name': 'HackReactor'}).exec()
      .then((data) => {
        console.log(data)
        if(!data) {
          new db.Group({name: 'HackReactor'}).save()
          .then((data) => {
            console.log(data);
            res.sendStatus(201);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(400);
          })
        }
        else {
          res.status(401).send('Group is already in the database.')
        }
      })
      .catch((err) => {
        console.log(err);
      })
      res.sendStatus(200);
    }
  },
  volunteer: {
    // Volunteer controller functions for GET
    get: (req, res) => {
      console.log('Volunteer GET');
      res.send(200);
    },
    // Volunteer controller functions for GET
    post: (req, res) => {
      console.log('Volunteer POST');
      res.send(200);
    }
  },
  request: {
    // Request controller functions for GET
    get: (req, res) => {
      console.log('Request GET');
      res.send(200);
    },
    // Request controller functions for GET
    post: (req, res) => {
      console.log('Request POST');
      res.send(200);
    }
  }
}