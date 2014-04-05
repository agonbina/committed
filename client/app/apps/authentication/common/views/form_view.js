/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    formViewTpl = require('./templates/form_view.hbs');

CommittedApp.module('AuthApp.Common.Views', function (Views, CommittedApp, Backbone, Marionette, $, _) {
    Views.Form = Marionette.ItemView.extend({
        template: formViewTpl,
        tagName: 'form',
        className: 'ui fluid form raised segment',

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