/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    Backbone = require('backbone'),
    Parse = require('parse').Parse,
    User = require('./entities/user');

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
 * Load all entities, mainly to register the global entity handlers
 */

CommittedApp.addInitializer(function () {
    var entities = [
            'user',
            'project',
            'projects'
        ],
        entitiesPath = './entities/',
        loadEntity = function (entity) {
            console.log(entitiesPath + entity);
            require(entitiesPath + entity);
        };

    _(entities).each(loadEntity);
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


