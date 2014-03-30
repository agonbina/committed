/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    Backbone = require('backbone'),
    Parse = require('parse').Parse,
    User = require('./entities/user');

/**
 * App regions
 */

CommittedApp.addRegions({
    mainRegion: '#main-region'
});

/**
 * Initialize Parse
 */

CommittedApp.addInitializer(function () {
    Parse.initialize("BM7C5y6YaGzi31m1zoy2FiORwlqm7hPAeuj6Hrmz", "HytjMDhS0rOMTY0jY9Fi8J7x4fBGGim4ddrXMEkm");
});

/**
 * Helper: set history fragment
 * @param route
 * @param options
 */

CommittedApp.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

/**
 * Helper: get current history fragment
 */

CommittedApp.getCurrentRoute = function () {
    return Backbone.history.fragment;
};

CommittedApp.on('initialize:after', function () {
    if (Backbone.history) {
        Backbone.history.start();

        if (CommittedApp.getCurrentRoute() === 'dashboard') {
            CommittedApp.trigger('projects:list');
        }
    }
});

CommittedApp.start();


