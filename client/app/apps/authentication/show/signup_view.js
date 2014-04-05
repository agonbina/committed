/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    FormView = require('../common/views/form_view'),
    signupViewTpl = require('./templates/signup_view.hbs');

/**
 * Signup form view
 */

CommittedApp.module('Views', function (Views, CommittedApp, Backbone, Marionette, $, _) {
    Views.Signup = FormView.extend({
        template: signupViewTpl
    });

    module.exports = Views.Signup;
});