/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    newProjectTpl = require('./templates/project.hbs'),
    FormView = require('../../../common/views/form_view');

/**
 * ProjectsApp.New project view
 */

CommittedApp.module('ProjectsApp.New', function (New, CommittedApp, Backbone, Marionette, $, _) {
    New.Project = FormView.extend({
        template: newProjectTpl
    });

    module.exports = New.Project;
});