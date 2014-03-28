var CommittedApp = require('app'),
    Parse = require('parse').Parse,
    User = require('./entities/user'),
    Project = require('./entities/project'),
    ProjectsListView = require('./apps/projects/list/list_view');

CommittedApp.addRegions({
    mainRegion: '#main-region'
});

CommittedApp.addInitializer(function () {
    Parse.initialize("BM7C5y6YaGzi31m1zoy2FiORwlqm7hPAeuj6Hrmz", "HytjMDhS0rOMTY0jY9Fi8J7x4fBGGim4ddrXMEkm");
});

CommittedApp.on('initialize:after', function () {
    var project = new Project();
    project.save({
        success: function (project) {
            var projectsView = new ProjectsListView({
                model: project
            });
            CommittedApp.mainRegion.show(projectsView);
        },
        error: function (project, err) {
            console.log(err);
        }
    });
});

CommittedApp.start();
