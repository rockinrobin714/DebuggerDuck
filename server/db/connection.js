const mongoose = require ('mongoose');

//This must be called because mongoose's promises library is deprecated
mongoose.Promise = global.Promise;
 
if(!process.env.dbUrl) {
var mlab = require('../env/config.js')
}
var link = process.env.dbUrl || mlab.dbUrl
mongoose.connect(`${link}`);

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err);
});
db.once('open', function () {
  console.log('connected to database.');
});


module.exports = mongoose;
