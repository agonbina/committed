/**
 * Handlers for all app events
 */

var Handlers = {
    getProjectEntity: function (id) {
        var Project = require('./../entities/project'),
            project = new Project();
        return project.fetch();
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