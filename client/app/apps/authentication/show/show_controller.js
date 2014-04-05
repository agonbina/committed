/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    LoginView = require('./login_view');

/**
 * AuthApp.Show controller
 */

CommittedApp.module('AuthApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Controller = {
        showLogin: function () {
            var user = CommittedApp.request('user:entity:new'),
                loginView = new LoginView({
                    model: user
                });

            CommittedApp.mainRegion.show(loginView);
        }
    };

    module.exports = Show.Controller;
});