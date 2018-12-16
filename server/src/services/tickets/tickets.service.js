// Initializes the `tickets` service on path `/tickets`
const createService = require('feathers-nedb');
const createModel = require('../../models/tickets.model');
const hooks = require('./tickets.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tickets', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tickets');

  service.hooks(hooks);
};
