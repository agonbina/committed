/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    formViewTpl = require('./templates/form.hbs');

CommittedApp.module('AuthApp.Common.Views', function (Views, CommittedApp, Backbone, Marionette, $, _) {
    Views.Form = Marionette.ItemView.extend({
        template: formViewTpl,
        tagName: 'form',
        className: 'ui form raised segment',

        initialize: function () {
            Backbone.Validation.bind(this);
        },

        events: {
            'submit': 'submitForm'
        },

        submitForm: function (e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            this.triggerMethod('form:submit', data);
        },

        onError: function (error) {
            var $form = this.$el,
                errorMessage = _.capitalize(error.message);

            var $error = $('<div></div>')
                .addClass('ui error message')
                .append(function () {
                    return '<div class="header">Oops</div>' +
                        '<p>' + errorMessage + '</p>';
                });

            $form.addClass('error');
            $form.find('.ui.error.message').remove();
            $form.prepend($error);
        },

        onLoading: function () {
            var $form = this.$el;
            $form.toggleClass('loading');
        },

        onClose: function () {
            Backbone.Validation.unbind(this);
        }
    });

    module.exports = Views.Form;
});