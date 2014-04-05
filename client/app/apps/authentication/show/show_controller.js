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
            var user = CommittedApp.request('user:entity:new'),
                loginView = new LoginView({
                    model: user
                });

            loginView.on('form:submit', function (data) {
                user.set(data);

                if (user.isValid()) {
                    loginView.triggerMethod('loading');

                    user.logIn()
                        .then(function (user) {
                            console.log('logged in as, ', user);
                            CommittedApp.trigger('projects:list');
                        },function (err) {
                            loginView.triggerMethod('loading');
                        });
                }
            });

            CommittedApp.mainRegion.show(loginView);
        },

        showSignup: function () {
            var user = CommittedApp.request('user:entity:new'),
                signupView = new SignupView({
                    model: user
                });

            signupView.on('form:submit', function (data) {
                user.set(data);
                signupView.triggerMethod('loading');

                user.signUp()
                    .then(function (user) {
                        console.log(user, ' is signed up');
                        CommittedApp.trigger('projects:list');
                    }, function (err) {
                        console.log(err);
                        signupView.triggerMethod('loading');
                    });
            });

            CommittedApp.mainRegion.show(signupView);
        }
    };

    module.exports = Show.Controller;
});