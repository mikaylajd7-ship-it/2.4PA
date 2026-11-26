// Production environment configuration.
// Set the production database URI through the MONGODB_URI environment variable.
module.exports = {
    db: process.env.MONGODB_URI || 'mongodb://127.0.0.1/mean-book',
    sessionSecret: process.env.SESSION_SECRET || 'productionSessionSecret'
};
