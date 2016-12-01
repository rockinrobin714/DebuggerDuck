const mongoose = require ('mongoose');
const connection = mongoose.connect('mongodb://debuggerduck:debuggerduck1@ds119588.mlab.com:19588/debuggerduck');
module.exports = connection;