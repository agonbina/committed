/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    Parse = require('parse').Parse,
    Project = require('./project');

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {

    /**
     * Projects collection
     */

    var Projects = Entities.Projects = Parse.Collection.extend({
        model: Project,

        comparator: function (model) {
            return -model.updatedAt;
        }
    });

    var API = {
        getProjects: function () {
            var user = CommittedApp.request('user:current'),
                projects = new Projects();
            projects.query = new Parse.Query(Project)
                .equalTo('owner', user);

            return projects.fetch();
        },

        getUserProjects: function (userId) {
            var projects = new Projects();
            projects.query = new Parse.Query(Project)
                .equalTo('owner', userId);
        }
    };

    CommittedApp.reqres.setHandlers({
        'projects': API.getProjects,
        'projects:user': API.getUserProjects
    });

    module.exports = Entities.Projects;
});