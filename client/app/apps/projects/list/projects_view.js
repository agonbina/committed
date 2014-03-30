var CommittedApp = require('app'),
    ProjectView = require('./project_view');

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Projects = Marionette.CollectionView.extend({
        itemView: ProjectView
    });

    module.exports = List.Projects;
});