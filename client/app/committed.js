var CommittedApp = require('./app');

CommittedApp.on('initialize:after', function () {
    console.log('app started');
});

CommittedApp.start();