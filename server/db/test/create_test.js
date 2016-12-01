const assert = require('assert');
const User = require('../src/user')
//done is available for any 'it' or 'before each'
//You MUST call done if you put it in the parens
describe('Creating records', () => {
	it ('saves a user', (done) => {
		const joe = new User({username:'Joe', pic:'cats'});

		joe.save()
			.then(()=>{
				//Has Joe been saved sucessfully?
				assert(!joe.isNew);
				done();
			})
	});
});