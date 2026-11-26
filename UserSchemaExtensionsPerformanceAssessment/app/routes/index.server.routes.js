// Load the index controller and define the home page route.
const index = require('../controllers/index.server.controller');

module.exports = function (app) {
    app.get('/', index.render);
};
