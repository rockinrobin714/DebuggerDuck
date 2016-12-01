const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
//this is run only ONE time before test suite
before((done)=>{
	mongoose.connect('mongodb://localhost/debuggertest');
	mongoose.connection
		.once('open', () => {done(); })
		.on('error', (error)=> {
			console.warn('Warning', error);
		});
})
//If this doesn't exist, mongo will make it for you

beforeEach((done)=>{
	mongoose.connection.collections.users.drop(() => {
		//Ready to run the next test!
		done();
	});
})
