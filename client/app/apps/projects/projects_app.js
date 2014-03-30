/**
 * Module dependencies
 */

var CommittedApp = require('app');

/**
 * ProjectsApp module
 */

CommittedApp.module('ProjectsApp', function (ProjectsApp, CommittedApp, Backbone, Marionette, $, _) {

    ProjectsApp.startWithParent = false;

    ProjectsApp.onBeforeStart = function () {
        require('./projects_app_router');
    };

    ProjectsApp.onStart = function () {
        console.log('starting ProjectsApp');
    };

    ProjectsApp.onStop = function () {
        console.log('stopping ProjectsApp');
    };

    module.exports = ProjectsApp;
});

