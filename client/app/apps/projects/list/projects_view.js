/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    ProjectView = require('./project_view');

/**
 * List.Projects view module
 */

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Projects = Marionette.CollectionView.extend({
        className: 'ui three stackable items',
        itemView: ProjectView
    });

    module.exports = List.Projects;
});