const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./util/router.js');
const db = require('./db/schemas.js');
const dbConnection = require('./db/connection.js');
const session = require('express-session');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;

// Use express and export it
const app = express();
module.exports.app = app;

// Check to see if there is a port environment variable or just use port 4040 instead
module.exports.NODEPORT = process.env.PORT || 4040;


//OAuth strategies require a 'verify' function that receives accessToken
//for accessing FB API. Function must invoke 'cb' with a user object
//which will be set at req.user in route handlers after authentication
//Make a strategy for FB authentication

if(!process.env.clientID) {
var credentials = require('../config.js')
} else {
 var deployedURL = `https://food-walker.herokuapp.com/auth/facebook/callback`
}

var clientID = process.env.clientID||credentials.facebook.clientID
var clientSecret = process.env.clientSecret||credentials.facebook.clientSecret
var callbackURL = deployedURL||credentials.facebook.callbackURL

if (process.env.server) {
  passport.use(new Strategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: callbackURL
  },
  //facebook sends back tokens and profile
  function(accessToken, refreshToken, profile, done) {
    db.User.findOne({fb_id: profile.id}).exec()
      .then((data) => {
        console.log(data);
        if(!data) {
          new db.User({
            username: profile.displayName,
            fb_id: profile.id,
            picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=normal',
            groups: [{group_id: 2345}]
          }).save()
          .then((data) => {
          })
          .catch((err) => {
            console.error(err);
          })
        }
      })
     return done(null, profile);
  }));
} else {
  passport.use(new Strategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: 'http://127.0.0.1:' + module.exports.NODEPORT + '/facebook/oauth'
  },
  //facebook sends back tokens and profile
  function(accessToken, refreshToken, profile, done) {
    db.User.findOne({fb_id: profile.id}).exec()
      .then((data) => {
        //console.log(data);
        if(!data) {
          new db.User({
            username: profile.displayName,
            fb_id: profile.id,
            picture: 'https://graph.facebook.com/' + profile.id + '/picture?type=normal',
            groups: [{group_id: 2345}]
          }).save()
          .then((data) => {

          })
          .catch((err) => {
            console.error(err);
          })
        }
      })
     return done(null, profile);
  }));
}

//Serialize and deserialize users out of the session.
passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use body-parser for parsing JSON and URLencoded body data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// User cookie-parser to parse cookies we get from Facebook
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// // set a cookie
// app.use(function (req, res, next) {
//   // check if client sent cookie
//   var cookie = req.cookies.cookieName;
//   if (cookie === undefined)
//   {
//     // no: set a new cookie
//     var randomNumber=Math.random().toString();
//     randomNumber=randomNumber.substring(2,randomNumber.length);
//     res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
//     console.log('cookie created successfully');
//   } 
//   else
//   {
//     // yes, cookie was already present 
//     console.log('cookie exists', cookie);
//   } 
//   next();
// });

// Serve the static client HTML files
app.use(express.static(path.join(__dirname, '/../client/public')));
// Serve the static client React files
app.use('/dist', express.static(path.join(__dirname, '/../client/dist')));
// Serve the node modules
app.use('/lib', express.static(path.join(__dirname, '/../node_modules')));

//Wasted a lot of time trying to get passport.authenticate to work inside the router so I placed it here instead
app.get('/login', passport.authenticate('facebook'));
app.get('/facebook/oauth', passport.authenticate('facebook', {failureRedirect: '/login'}),
  (req, res) => {
    let cookie = {
      session: req.sessionID,
      userID: req.user.id
    }
    res.cookie('fr-session', cookie, { maxAge: 900000, httpOnly: true }).redirect('/');
});

// Listen for requests on /api and then use the router to determine
// what happens with the requests
app.use('/api', router);

// Start the actual server listening on the port variable
app.listen(module.exports.NODEPORT, function (err) {
  // If there is an error log it
  if (err) { console.error(err); }
  // If there is not an error console log what port the server is running on
  else { console.log('Server running on port %s', module.exports.NODEPORT) }
})
