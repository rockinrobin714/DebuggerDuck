const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
//mongoose.connect(172.23.0.0/16)

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

const User = mongoose.model('user', UserSchema);

//
module.exports = User;