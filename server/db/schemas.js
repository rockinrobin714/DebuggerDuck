const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//initiate a database variable to attach schemas to
let db = {};

const UserSchema = new Schema ({
	//mongoose will automatically create a unique id, so no need to manually create one
	username: String,
	picture: String,
	groups: [{group_id: String, karma:{type: Number, default:0}}]

});

// let getNameFromFb = function(input){
// 	//TODO?: Using fbs api, retrieve the name from fb
// 	return input;
// }
// let getPicFromFb = function(input){
// 	//TODO: Using fbs api, retrieve the picture from fb
// 	return input;
// }

// UserSchema.pre('save', function(next) {
//   let username = getNameFromFb(input);
//   this.username = name;
//   let picture = getPicFromFb(input);
//   this.picture = picture;
//   next();
// });

const GroupSchema = new Schema ({
	//Will automatically generate group id
	name: String
})

const OrderSchema = new Schema ({
	//Will automatically generate order id
	createdAt: { type : Date, default: Date.now },
	location: String,
	time: String,
	group_id: String,
	requests: [{user_id: String, text: String}]
})

db.user = mongoose.model('user', UserSchema);
db.group = mongoose.model('group', GroupSchema);
db.order = mongoose.model('order', OrderSchema);

module.exports = db;