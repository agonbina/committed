/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    noProjectsTpl = require('./templates/no_projects.hbs');

/**
 * List.NoProjects view
 */

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.NoProjects = Marionette.ItemView.extend({
        template: noProjectsTpl
    });

    module.exports = List.NoProjects;
});