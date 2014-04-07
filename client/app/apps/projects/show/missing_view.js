/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    missingViewTpl = require('./templates/missing.hbs');

CommittedApp.module('Show', function (Show, CommittedApp, Backbone, Marionette, $, _) {
    Show.Missing = Marionette.ItemView.extend({
        template: missingViewTpl,

        initialize: function (options) {
            options = options || {};
            this.message = options.message || 'Hmmm, seems like this project never existed.';
        },

        serializeData: function () {
            return {
                message: this.message
            }
        }
    });

    module.exports = Show.Missing;
});