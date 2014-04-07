/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    Parse = require('parse').Parse,
    LoadingView = require('../../../common/views/loading_view'),
    ProjectView = require('./project_view'),
    MissingProjectView = require('./missing_view');

/**
 * Show controller
 */

CommittedApp.module('ProjectsApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Controller = {
        showProject: function (id) {
            var loadingView = new LoadingView();
            CommittedApp.mainRegion.show(loadingView);

            var fetchProject = CommittedApp.request('project', id);

            fetchProject.then(function (project) {
                var projectView = new ProjectView({
                    model: project
                });

                CommittedApp.mainRegion.show(projectView);
            }, function (error) {
                var message = error.code === Parse.Error.OBJECT_NOT_FOUND ? undefined
                        : 'Something wen\'t wrong. Please try again.',
                    missingView =   new MissingProjectView({message: message});

                CommittedApp.mainRegion.show(missingView);
            });
        }
    };

    module.exports = Show.Controller;
});