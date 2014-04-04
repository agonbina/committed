/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    formViewTpl = require('./templates/form_view.hbs');

CommittedApp.module('Views', function (Views, CommittedApp, Backbone, Marionette, $, _) {
    Views.Form = Marionette.ItemView.extend({
        template: formViewTpl,

        triggers: {
            'submit .button.js-submit': 'form:submit'
        }
    });

    module.exports = Views.Form;
});