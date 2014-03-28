var CommittedApp = require('../app');

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
    Entities.User = Backbone.Model.extend({
        defaults: {
            username: 'agonbina'
        }
    });

    module.exports = Entities.User;
});

