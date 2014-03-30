var CommittedApp = require('app'),
    Parse = require('parse').Parse;

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
    Entities.User = Parse.User;

    module.exports = Entities.User;
});

