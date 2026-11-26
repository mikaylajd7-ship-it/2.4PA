// Name: Mikayla Dickerson
// Date: November 26, 2026
// Assignment: Guided Practice - Mongoose Integration

// Set the NODE_ENV variable.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the Mongoose and Express configuration modules.
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');

// Connect to MongoDB before starting the Express server.
async function startServer() {
    try {
        await configureMongoose();

        const app = configureExpress();
        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log('Mikayla Dickerson - Mongoose integration is active.');
            console.log(`Server running at http://localhost:${PORT}/`);
        });
    } catch (error) {
        console.error('Unable to start the application:', error.message);
        process.exit(1);
    }
}

startServer();

module.exports = startServer;
