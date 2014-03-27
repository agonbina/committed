var Marionette = require('backbone.marionette');
var Parse = require('parse').Parse;


var App = new Marionette.Application();

App.on('initialize:after', function () {
    console.log('app started');
});

App.start();