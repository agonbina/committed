/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    ProjectView = require('./project_view'),
    LoadingView = require('../../../common/views/loading_view');

/**
 * Show controller
 */

CommittedApp.module('ProjectsApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Controller = {
        showProject: function (id) {
            var loadingView = new LoadingView();
            CommittedApp.mainRegion.show(loadingView);

            var fetchProject = CommittedApp.request('project:entity', id);

            fetchProject.then(function (project) {
                var projectView = new ProjectView({
                    model: project
                });
                setTimeout(function () {
                    CommittedApp.mainRegion.show(projectView);
                }, 2000);
            }, function (error) {
                console.log(error);
            });
        }
    };

    module.exports = Show.Controller;
});