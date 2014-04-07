/**
 *  Module dependencies
 */

var CommittedApp = require('app'),
    ProjectsView = require('./projects_view'),
    LoadingView = require('../../../common/views/loading_view');

/**
 * ProjectsApp.List controller
 */

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Controller = {
        listProjects: function () {
            var loadingView = new LoadingView();
            CommittedApp.mainRegion.show(loadingView);

            var fetchProjects = CommittedApp.request('projects');
            fetchProjects.then(function (projects) {
                var projectsListView = new ProjectsView({
                    collection: projects
                });
                projectsListView.on('itemview:project:show', function (childView, args) {
                    CommittedApp.trigger('project:show', args.model.id);
                });

                CommittedApp.mainRegion.show(projectsListView);
            }, function (error) {
                console.log(error);
            });
        }
    };

    module.exports = List.Controller;
});