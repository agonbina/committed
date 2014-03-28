var CommittedApp = require('app'),
    Parse = require('parse').Parse;

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
    Entities.Project = Parse.Object.extend({
        className: 'Project',
        defaults: {
            name: 'Un-named project'
        }
    });

    module.exports = Entities.Project;
});