// Name: Mikayla Dickerson
// Date: November 26, 2026
// Route POST requests to /users to the user creation controller.

const users = require('../controllers/user.server.controller');

module.exports = function (app) {
    app.route('/users').post(users.create);
};
