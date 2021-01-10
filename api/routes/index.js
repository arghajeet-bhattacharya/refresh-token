const authenticationRoute = require('./authenticationRoute');

module.exports = (app) => {
    authenticationRoute(app);
};