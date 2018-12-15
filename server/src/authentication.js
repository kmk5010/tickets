const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
const userIdentifier = require('./services/users/user.identifier');


module.exports = function (app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies),
        userIdentifier,
        context => {
          // context.params.payload = context.params.payload || {};
          const { params, params: { user = {} } } = context;
          //Object.assign(context.params.payload, {username: context.data.username}, {roles: context.data.roles});
          params.payload = {
            username: user.username,
            roles: user.roles
          };
        }
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
