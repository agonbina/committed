/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    User = require('parse').Parse.User;

/**
 * ProjectsApp router
 */

CommittedApp.module('ProjectsApp', function (ProjectsApp, CommittedApp, Backbone, Marionette, $, _) {
    ProjectsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'projects': 'listProjects',
            'projects/:id': 'showProject'
        },

        /**
         * Middleware for the routes
         */

        before: function () {
            if (!User.current()) {
                console.log('You are not logged in ...');
                return false;
            }
        }
    });

    /**
     * Route handlers
     */

    var API = {
        listProjects: function () {
            var ListController = require('./list/list_controller');
            ListController.listProjects();
        },

        showProject: function (id) {
            var ShowController = require('./show/show_controller');
            ShowController.showProject(id);
        }
    };

    /**
     * Create a new instance of the Router before
     * ProjectsApp starts
     */

    ProjectsApp.addInitializer(function () {
        var projectsAppRouter = new ProjectsApp.Router({
            controller: API
        });
    });

    /**
     * Application wide events related to ProjectsApp
     */

    CommittedApp.on('project:show', function (id) {
        CommittedApp.navigate('projects/' + id);
        API.showProject(id);
    });

    CommittedApp.on('projects:list', function () {
        CommittedApp.navigate('projects');
        API.listProjects();
    });

    module.exports = ProjectsApp.Router;
});