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
        model: Project
    });

    var API = {
        getProjectsEntities: function () {
            var projects = new Projects();
            return projects.fetch();
        }
    };

    CommittedApp.reqres.setHandlers({
        'project:entities': API.getProjectsEntities
    });

    module.exports = Entities.Projects;
});