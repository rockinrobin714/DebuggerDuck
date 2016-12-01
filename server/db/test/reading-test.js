const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () =>{
	let joe;

	beforeEach((done)=>{

		joe = new User({name:'Joe'});
		joe.save()
			.then(() => done());
	});
//find returns an array
	it('finds all users with a name of joe', (done) => {
		User.find({name: 'Joe'})
			.then((users) =>{
//can't use === normally because they have identical ids but the object that wraps around them is different
//use toString() to get the id itself
				assert(users[0]._id.toString()===joe._id.toString());
				done();
			})
	});
	it('find a user with a particular id', (done)=>{
		//findone returns one record
		User.findOne({_id: joe._id})
			.then((user)=>{
				assert(user.name === 'Joe');
				done();
			})
	});
});