/**
 *  Module dependencies
 */

var CommittedApp = require('app'),
    ProjectsView = require('./projects_view');

/**
 * ProjectsApp.List controller
 */

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Controller = {
        listProjects: function () {
            var fetchProjects = CommittedApp.request('project:entities');

            fetchProjects.then(function (projects) {
                var projectsListView = new ProjectsView({
                    collection: projects
                });

                CommittedApp.mainRegion.show(projectsListView);
            }, function (error) {
                console.log(error);
            });
        }
    };

    module.exports = List.Controller;
});