/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    NewProjectFormView = require('./project_view');

CommittedApp.module('ProjectsApp.New', function (New, CommittedApp, Backbone, Marionette, $, _) {
    New.Controller = {
        newProject: function () {
            var project = CommittedApp.request('project:new'),
                newProjectView = new NewProjectFormView({
                    model: project
                });

            newProjectView.on('form:submit', function (data) {
                project.set(data);

                if(project.isValid()) {
                    newProjectView.triggerMethod('loading');

                    project.save().then(function (project) {
                        CommittedApp.trigger('project:show', project.id);
                    }, function (error) {
                        newProjectView.triggerMethod('loading');
                        newProjectView.triggerMethod('error', error.message);
                    });
                }
            });

            CommittedApp.mainRegion.show(newProjectView);
        }
    };

    module.exports = New.Controller;
});