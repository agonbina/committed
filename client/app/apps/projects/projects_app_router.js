/**
 * Module dependencies
 */

var CommittedApp = require('app');

/**
 * ProjectsApp router
 */

CommittedApp.module('ProjectsApp', function (ProjectsApp, CommittedApp, Backbone, Marionette, $, _) {
    ProjectsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'projects': 'listProjects'
        }
    });

    /**
     * Route handlers
     */

    var API = {
        listProjects: function () {
            var ListController = require('./list/controller');
            ListController.listProjects();
        }
    };

    /**
     * Create a new instance of the Router before
     * ProjectsApp starts
     */

    ProjectsApp.addInitializer(function () {
        new ProjectsApp.Router({
            controller: API
        });
    });

    /**
     * Application wide events related to ProjectsApp
     */

    CommittedApp.on('projects:list', function () {
        CommittedApp.navigate('projects');
        API.listProjects();
    });

    module.exports = ProjectsApp.Router;
});