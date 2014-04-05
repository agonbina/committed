/**
 * Module dependencies
 */

var Parse = require('parse').Parse,
    CommittedApp = require('app');

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {

    /**
     * Project entity
     */

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
        },
        getNewProjectEntity: function () {
            return new Project();
        }
    };

    CommittedApp.reqres.setHandlers({
        'project:entity': API.getProjectEntity,
        'project:entity:new': API.getNewProjectEntity
    });

    module.exports = Entities.Project;
});