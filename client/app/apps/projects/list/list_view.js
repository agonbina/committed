var CommittedApp = require('app'),
    projectTpl = require('./templates/view.hbs');

CommittedApp.module('List', function (List, CommittedApp, Backbone, Marionette, $, _) {
    List.Project = Marionette.ItemView.extend({
        template: projectTpl
    });

    module.exports = List.Project;
});