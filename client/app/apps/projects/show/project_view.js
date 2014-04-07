/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    projectViewTpl = require('./templates/project.hbs');

/**
 * Show.Project view
 */

CommittedApp.module('ProjectsApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Project = Marionette.ItemView.extend({
        template: projectViewTpl,
        className: 'ui raised segment'
    });

    module.exports = Show.Project;
});