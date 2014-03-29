var CommittedApp = require('app'),
    Parse = require('parse').Parse,
    User = require('./entities/user'),
    Projects = require('./entities/projects'),
    ProjectsListView = require('./apps/projects/list/projects_view');

CommittedApp.addRegions({
    mainRegion: '#main-region'
});

CommittedApp.addInitializer(function () {
    Parse.initialize("BM7C5y6YaGzi31m1zoy2FiORwlqm7hPAeuj6Hrmz", "HytjMDhS0rOMTY0jY9Fi8J7x4fBGGim4ddrXMEkm");
});

CommittedApp.on('initialize:after', function () {
    var projects = new Projects();
    projects.fetch().then(function (projects) {
            var projectsListView = new ProjectsListView({
                collection: projects
            });

            CommittedApp.mainRegion.show(projectsListView);
        }, function (error) {
            console.log(error);
        }
    );
});

CommittedApp.start();
