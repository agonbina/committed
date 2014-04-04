/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    loadingViewTpl = require('./templates/login_view.hbs'),
    User = require('parse').Parse.User;

/**
 * Login view
 */

CommittedApp.module('AuthApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Login = Marionette.ItemView.extend({
        template: loadingViewTpl,

        initialize: function () {
            Backbone.Validation.bind(this);
        },

        ui: {
            'submitBtn': '.button.js-submit'
        },

        events: {
            'click @ui.submitBtn': 'login'
        },

        login: function (e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this),
                user = this.model;

            user.set(data);
            if(user.isValid(true)) {
                user.logIn().then(function (user) {
                    console.log('logged in ...');
                }, function (error) {
                    console.log(error);
                });
            }
        },

        onClose: function () {
            Backbone.Validation.unbind(this);
        }
    });

    module.exports = Show.Login;
});