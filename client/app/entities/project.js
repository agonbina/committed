var CommittedApp = require('app'),
    Parse = require('parse').Parse;

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
    Entities.Project = Parse.Object.extend({
        className: 'Project',
        defaults: {
            name: 'Un-named project'
        }
    });

    var API = {
        getProjectEntity: function (id) {

        }
    };

    module.exports = Entities.Project;
});