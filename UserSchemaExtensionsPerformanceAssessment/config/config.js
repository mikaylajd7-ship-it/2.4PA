// Load the correct configuration file according to NODE_ENV.
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
