/**
 * Module dependencies
 */

var Parse = require('parse').Parse;

/**
 * Project entity
 */

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
    var Project = Entities.Project = Parse.Object.extend({
        className: 'Project',
        defaults: {
            name: 'Un-named project'
        }
    });

    /**
     * App Handlers for the Project entity
     */

    var API = {
        getProjectEntity: function (projectId) {
            var project = new Project({ id: projectId });
            return project.fetch();
        }
    };

    CommittedApp.reqres.setHandlers({
        'project:entity': function (id) {
            return API.getProjectEntity(id);
        },

        'project:entity:new': function () {
            return new Project();
        }
    });

    module.exports = Entities.Project;
});