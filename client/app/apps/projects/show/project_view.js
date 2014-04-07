/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    ProjectViewTpl = require('./templates/project.hbs');

/**
 * Show.Project view
 */

CommittedApp.module('ProjectsApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Project = Marionette.ItemView.extend({
        template: ProjectViewTpl,
        className: 'ui raised segment'
    });

    module.exports = Show.Project;
});