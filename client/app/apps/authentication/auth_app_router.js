/**
 * Module dependencies
 */

var CommittedApp = require('app');


CommittedApp.module('AuthApp', function (AuthApp, CommittedApp, Backbone, Marionette, $, _) {
    AuthApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'login': 'showLogin',
            'signup': 'showSignup'
        }
    });

    var API = {
        showLogin: function () {
            var ShowController = require('./show/show_controller');
            ShowController.showLogin();
        },

        showSignup: function () {
            console.log('showing signup ...');
        }
    };

    AuthApp.addInitializer(function () {
        var authRouter = new AuthApp.Router({
            controller: API
        });
    });

    CommittedApp.on('login:show', function () {
        CommittedApp.navigate('login');
        API.showLogin();
    });

    CommittedApp.on('signup:show', function () {
        CommittedApp.navigate('signup');
        API.showSignup();
    });

    module.exports = AuthApp.Router;
});