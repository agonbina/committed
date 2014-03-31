/**
 * Module dependencies
 */

var _ = require('underscore');

/**
 * Handlers for all global events
 */

var Handlers = {
};

module.exports = function (CommittedApp) {
    var events = _.keys(Handlers);

    var setEventHandler = function (event) {
        CommittedApp.on(event, Handlers[event]);
    };

    _.each(events, setEventHandler);
};