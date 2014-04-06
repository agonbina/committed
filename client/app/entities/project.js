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
        getProject: function (projectId) {
            var project = new Project({ id: projectId });
            return project.fetch();
        },

        getNewProject: function () {
            var user = CommittedApp.request('user:current'),
                project = new Project();
            project.set('owner', user);
            return project;
        }
    };

    CommittedApp.reqres.setHandlers({
        'project': API.getProject,
        'project:new': API.getNewProject
    });

    module.exports = Entities.Project;
});