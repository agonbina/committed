/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    ProjectView = require('./project_view'),
    NoProjectsView = require('./no_projects_view');

/**
 * List.Projects view module
 */

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Projects = Marionette.CollectionView.extend({
        className: 'ui three stackable items',
        itemView: ProjectView,

        emptyView: NoProjectsView
    });

    module.exports = List.Projects;
});