var CommittedApp = require('./app'),
    User = require('./entities/user');

CommittedApp.addRegions({
    mainRegion: '#main-region'
});

CommittedApp.on('initialize:after', function () {
    console.log('app started');
    var user = new User();
    console.log(user.get('username'));
});

CommittedApp.start();
