/**
 * Module dependencies
 */

var CommittedApp = require('app');

/**
 * AuthApp module
 */

CommittedApp.module('AuthApp', function (AuthApp, CommittedApp, Backbone, Marionette, $, _) {

    AuthApp.startWithParent = false;

    AuthApp.onBeforeStart = function () {
        require('./auth_app_router');
    };

    AuthApp.onStart = function () {
        console.log('starting AuthApp');
    };

    AuthApp.onStop = function () {
        console.log('stopping AuthApp');
    };

    module.exports = AuthApp;
});