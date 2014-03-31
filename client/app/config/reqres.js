var Parse = require('parse').Parse;

/**
 * Handlers for all app events
 */

var Handlers = {
    getProjectEntity: function (id) {
        var Project = require('./../entities/project'),
            query = new Parse.Query(Project);
        return query.get(id);
    },

    getProjectEntities: function () {
        var Projects = require('./../entities/projects'),
            projects = new Projects();
        return projects.fetch();
    }
};

/**
 * Mount the handlers to a reqres instance
 * @param reqres
 */

module.exports = function (reqres) {
    reqres.setHandlers({
        'project:entity': Handlers.getProjectEntity,
        'project:entities': Handlers.getProjectEntities
    });
};