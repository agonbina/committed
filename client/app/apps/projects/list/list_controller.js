/**
 *  Module dependencies
 */

var CommittedApp = require('app'),
    ProjectsView = require('./projects_view'),
    LoadingView = require('../../../common/views');

/**
 * ProjectsApp.List controller
 */

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Controller = {
        listProjects: function () {
            var fetchProjects = CommittedApp.request('project:entities');
            var loadingView = new LoadingView();
            CommittedApp.mainRegion.show(loadingView);

            fetchProjects.then(function (projects) {
                var projectsListView = new ProjectsView({
                    collection: projects
                });

                setTimeout(function () {
                    CommittedApp.mainRegion.show(projectsListView);
                }, 2000);
            }, function (error) {
                console.log(error);
            });
        }
    };

    module.exports = List.Controller;
});