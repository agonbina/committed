/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    LoginView = require('./login_view'),
    User = require('../../../entities/user');

/**
 * AuthApp.Show controller
 */

CommittedApp.module('AuthApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Controller = {
        showLogin: function () {
            var user = new User(),
                loginView = new LoginView({
                    model: user
                });
            CommittedApp.mainRegion.show(loginView);
        }
    };

    module.exports = Show.Controller;
});