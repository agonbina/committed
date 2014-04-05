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

        tagName: 'form',

        className: 'ui fluid form raised segment',

        initialize: function () {
            Backbone.Validation.bind(this);
        },

        ui: {
            'submitBtn': '.button.js-submit'
        },

        events: {
            'click @ui.submitBtn': 'submitClicked'
        },

        submitClicked: function (e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            this.triggerMethod('form:submit', data);
        },

        onFormSubmit: function (data) {
            var view = this,
                user = this.model;
            user.set(data);

            if(user.isValid()) {
                view.triggerMethod('loading');

                user.logIn().then(function (user) {
                    console.log('logged in as, ', user);
                    view.triggerMethod('loading');
                }, function (err) {
                    console.warn(err);
                });
            }
        },

        onLoading: function () {
            var $form = this.$el;
            $form.toggleClass('loading');
        },

        onClose: function () {
            Backbone.Validation.unbind(this);
        }
    });

    module.exports = Show.Login;
});