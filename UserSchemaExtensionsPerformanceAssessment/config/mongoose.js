// Name: Mikayla Dickerson
// Date: November 26, 2026
// Configure the Mongoose connection and register application models.

const config = require('./config');
const mongoose = require('mongoose');

module.exports = async function configureMongoose() {
    // Register the User schema before it is requested by controllers.
    require('../app/models/user.server.model');

    // Connect to the MongoDB database configured for this environment.
    await mongoose.connect(config.db);

    console.log(`Mongoose connected to ${config.db}`);
    return mongoose.connection;
};
