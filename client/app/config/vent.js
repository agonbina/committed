/**
 * Module dependencies
 */

var _ = require('underscore');

/**
 * Handlers for all global events
 */

var Handlers = {
    /*'projects:list': function () {
        var Controller = require('../apps/projects/list/controller');
        Controller.listProjects();
    }*/
};

module.exports = function (CommittedApp) {
    var events = _.keys(Handlers);

    var setEventHandler = function (event) {
        CommittedApp.on(event, Handlers[event]);
    };

    _.each(events, setEventHandler);
};