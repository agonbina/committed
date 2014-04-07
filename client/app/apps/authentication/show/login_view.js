/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    FormView = require('../common/views/form_view'),
    loadingViewTpl = require('./templates/login.hbs');

/**
 * Login view
 */

CommittedApp.module('AuthApp.Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Login = FormView.extend({
        template: loadingViewTpl
    });

    module.exports = Show.Login;
});