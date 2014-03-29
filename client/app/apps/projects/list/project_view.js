var CommittedApp = require('app'),
    projectTpl = require('./templates/project_view.hbs');

CommittedApp.module('ProjectsApp.List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Project = Marionette.ItemView.extend({
        className: 'ui raised segment',
        template: projectTpl
    });

    module.exports = List.Project;
});