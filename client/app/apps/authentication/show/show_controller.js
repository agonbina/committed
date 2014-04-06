/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    LoginView = require('./login_view'),
    SignupView = require('./signup_view');

/**
 * AuthApp.Show controller
 */

CommittedApp.module('AuthApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Controller = {
        showLogin: function () {
            var user = CommittedApp.request('user:new'),
                loginView = new LoginView({
                    model: user
                });

            loginView.on('form:submit', function (data) {
                user.set(data);

                if (user.isValid()) {
                    loginView.triggerMethod('loading');

                    user.logIn()
                        .then(function (user) {
                            CommittedApp.trigger('projects:list');
                        },function (err) {
                            loginView.triggerMethod('error', err);
                            loginView.triggerMethod('loading');
                        });
                }
            });

            CommittedApp.mainRegion.show(loginView);
        },

        showSignup: function () {
            var user = CommittedApp.request('user:new'),
                signupView = new SignupView({
                    model: user
                });

            signupView.on('form:submit', function (data) {
                user.set(data);

                if(user.isValid()) {
                    signupView.triggerMethod('loading');

                    user.signUp()
                        .then(function (user) {
                            CommittedApp.trigger('projects:list');
                        }, function (err) {
                            signupView.triggerMethod('loading');
                            signupView.triggerMethod('error', err);
                        });
                }
            });

            CommittedApp.mainRegion.show(signupView);
        }
    };

    module.exports = Show.Controller;
});