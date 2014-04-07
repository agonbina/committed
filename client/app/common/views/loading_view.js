/**
 * Module dependencies
 */

var CommittedApp = require('app'),
    loadingViewTpl = require('./templates/loading.hbs');

CommittedApp.module('Common.Views', function (Views, CommittedApp, Backbone, Marionette, $, _) {

    /**
     * Loading view, using class="ui loader"
     */

    Views.Loading = Marionette.ItemView.extend({
        template: loadingViewTpl,

        initialize: function(options){
            options = options || {};
            this.message = options.message || "Loading";
        },

        serializeData: function(){
            return {
                message: this.message
            }
        }
    });

    module.exports = Views.Loading;
});