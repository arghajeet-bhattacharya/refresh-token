const authenticationController = require("../controllers/authenticationController");

module.exports = (app) => {
  app.post("/api/v1/authentication/register", authenticationController.register);
  app.post("/api/v1/authentication/login", authenticationController.login);
  app.post("/api/v1/authentication/refresh-token", authenticationController.refreshToken);
  app.delete("/api/v1/authentication/logout", authenticationController.logout);
};