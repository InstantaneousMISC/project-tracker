const AuthController = require('./controllers/AuthController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthController.register
  );
};
