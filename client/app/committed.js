/**
 * Module dependencies
 */
var Backbone = require('backbone'),
    _ = require('underscore'),
    Parse = require('parse').Parse,
    CommittedApp = require('app');

/**
 * Helper: set history fragment
 * @param route ,
 * @param options ,options you would normally pass to history.navigate
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
 * Load all entities, to register the global entity handlers
 */

CommittedApp.addInitializer(function () {
    require('./entities/user');
    require('./entities/project');
    require('./entities/projects');
});

/**
 * Start the sub-apps needed at runtime
 */

CommittedApp.addInitializer(function () {
    var AuthenticationApp = require('./apps/authentication/auth_app'),
        ProjectsApp = require('./apps/projects/projects_app');

    AuthenticationApp.start();
    ProjectsApp.start();
});

CommittedApp.on('initialize:after', function () {
    if (Backbone.history) {
        Backbone.history.start();

        if (CommittedApp.getCurrentRoute() === '') {
            CommittedApp.trigger('projects:list');
        }
    }
});

CommittedApp.start();


