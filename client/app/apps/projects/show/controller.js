/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    ProjectView = require('./project_view');

/**
 * Show controller
 */

CommittedApp.module('ProjectsApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Controller = {
        showProject: function (id) {
            var fetchProject = CommittedApp.request('project:entity', id);

            fetchProject.then(function (project) {
                var projectView = new ProjectView({
                    model: project
                });

                CommittedApp.mainRegion.show(projectView);
            }, function (error) {
                console.log(error);
            });
        }
    };

    module.exports = Show.Controller;
});