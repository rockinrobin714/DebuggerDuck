const router = require('express').Router();

// Require the controller functions for the router
const controller = require('./controller');

// User the router to direct GET and POST requests for /login
router.get('/login', controller.login.get);
router.post('/login', controller.login.post);

// User the router to direct GET and POST requests for /group
router.get('/group', controller.group.get);
router.post('/group', controller.group.post);

// User the router to direct GET and POST requests for /volunteer
router.get('/volunteer', controller.volunteer.get);
router.post('/volunteer', controller.volunteer.post);

// User the router to direct GET and POST requests for /request
router.get('/request', controller.request.get);
router.post('/request', controller.request.post);


module.exports = router;