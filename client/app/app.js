var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var CommittedApp = new Marionette.Application();

// Configure the reqres handlers in one place
require('./config/reqres')(CommittedApp.reqres);

// Attach the global app events
require('./config/vent')(CommittedApp);

// Load any configurations/extensions of Backbone and Marionette
require('./config/vendor/backbone.validation');

require('backbone.routefilter');
require('backbone.syphon');

module.exports = CommittedApp;