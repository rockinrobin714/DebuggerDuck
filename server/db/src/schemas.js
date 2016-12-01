const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//initiate a database variable to attach schemas to
let db;

const UserSchema = new Schema ({
	//mongoose will automatically create a unique id, so no need to store one
	username: String,
	picture: String

});

let getNameFromFb = function(input){
	//TODO: Using fbs api, retrieve the name from fb
	return input;
}
let getPicFromFb = function(input){
	//TODO: Using fbs api, retrieve the picture from fb
	return input;
}

UserSchema.pre('save', function(next) {
  let username = getNameFromFb(input);
  this.username = name;
  let picture = getPicFromFb(input);
  this.picture = picture;
  next();
});

const UserGroupKarmSchema = new Schema ({
//mongoose will automatically create a unique id, so no need to store one
//This username is connected to the users table
	user_id: String,
	//This group id is connected to the group table
	group_id: String,
	//Set the default amount of karma to 0
	karma: 0

});

//Not sure if this belongs here. If so, fill it out.
//If not, delete it.

// let setUpKarma = function(input){
// 	TODO? By querying the database, update the karma
// }


// UserGroupKarmaSchema.pre('save', function(next) {
//   next();
// });

db.userGroupKarma = mongoose.model('userGroupKarma', UserGroupKarmaSchema);
db.user = mongoose.model('user', UserSchema);

module.exports = db;