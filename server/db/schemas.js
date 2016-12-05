const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// ***How to insert something in the DB:
// let example = new db.user({ username:'blablabla2', pic:'blablabla2', groups:{group_id: '12345MKS', }});
// example.save();
// let example2 = new db.group({ name:'super awesome group'});
// example2.save();
// let example3 = new db.order({ group_id: '12345MKS', location:'Chipotle', time:'1:00PM', groups:{group_id: '12345MKS', }});
// example3.save();
// Still not sure how to update requests on the order, try googling findOneAndUpdate();

// initiate a database variable to attach schemas to
let db = {};

const UserSchema = new Schema ({
	//mongoose will automatically create a unique id, so no need to manually create one
	username: String,
	picture: String,
	groups: [{group_id: String, karma: {type: Number, default:0}}]
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
	// Will automatically generate group id
	name: String
})

const OrderSchema = new Schema ({
	// Will automatically generate order id
	order_user: String,
	location: String,
	time: String,
	group_id: String,
	requests: [{user_id: String, text: String, default: []}],
	createdAt: { type : Date, default: Date.now }
})

db.User = mongoose.model('user', UserSchema);
db.Group = mongoose.model('group', GroupSchema);
db.Order = mongoose.model('order', OrderSchema);

module.exports = db;