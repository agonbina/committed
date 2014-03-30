/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    Parse = require('parse').Parse,
    Project = require('./project');

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
    Entities.Projects = Parse.Collection.extend({
        model: Project
    });

    module.exports = Entities.Projects;
});