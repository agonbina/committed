var Marionette = require('backbone.marionette');
var CommittedApp = new Marionette.Application();

// Configure the reqres handlers in one place
require('./config/reqres')(CommittedApp.reqres);

// Attach the global app events
require('./config/vent')(CommittedApp);

module.exports = CommittedApp;