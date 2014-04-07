/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    missingViewTpl = require('./templates/missing.hbs');

CommittedApp.module('Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Missing = Marionette.ItemView.extend({
        template: missingViewTpl
    });

    module.exports = Show.Missing;
});