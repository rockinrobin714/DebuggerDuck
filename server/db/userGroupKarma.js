const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/27017');
//mongoose.connect(172.23.0.0/16)

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

const UserGroupKarma = mongoose.model('userGroupKarma', UserGroupKarmaSchema);

module.exports = UserGroupKarma;