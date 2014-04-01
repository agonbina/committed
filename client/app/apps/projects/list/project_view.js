/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    projectTpl = require('./templates/project_view.hbs');

/**
 * List.Project view
 */

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Project = Marionette.ItemView.extend({
        className: 'item',
        template: projectTpl
    });

    module.exports = List.Project;
});