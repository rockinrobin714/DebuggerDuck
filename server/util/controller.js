const db = require('../db/schemas.js');

module.exports = {
  // Login controller functions for GET
  login: {
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
  // Login controller functions for GET
    get: (req, res) => {
      
      res.send(200);
    },
  // Login controller functions for GET
    post: (req, res) => {
      console.log('Group POST');
      res.send(200);
    }
  },
  volunteer: {
  // Login controller functions for GET
    get: (req, res) => {
      console.log('Volunteer GET');
      res.send(200);
    },
  // Login controller functions for GET
    post: (req, res) => {
      console.log('Volunteer POST');
      res.send(200);
    }
  },
  request: {
    get: (req, res) => {
      console.log('Request GET');
      res.send(200);
    },
    post: (req, res) => {
      console.log('Request POST');
      res.send(200);
    }
  }
}