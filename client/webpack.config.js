var path = require('path');
var webpack = require('webpack');

var resolveBowerPath = function(componentPath) {
    return path.join(__dirname, 'bower_components', componentPath);
};

module.exports = {
    cache: true,

    resolve: {
        alias: {
            app: path.join(__dirname, 'app/app.js'),
            jquery: resolveBowerPath('/jquery/dist/jquery.js'),
            underscore: resolveBowerPath('/underscore/underscore.js'),
            backbone: resolveBowerPath('/backbone/backbone.js'),
            'backbone.wreqr': resolveBowerPath('/backbone.wreqr/lib/amd/backbone.wreqr.js'),
            'backbone.babysitter': resolveBowerPath('/backbone.babysitter/lib/amd/backbone.babysitter.js'),
            'backbone.marionette': resolveBowerPath('/backbone.marionette/lib/core/amd/backbone.marionette.js'),
            'backbone.routefilter': resolveBowerPath('backbone.routeFilter/dist/backbone.routefilter.js'),
            'backbone.validation': resolveBowerPath('backbone.validation/dist/backbone-validation-amd.js'),
            'backbone.syphon': resolveBowerPath('backbone.syphon/lib/amd/backbone.syphon.js'),
            'parse': path.join(__dirname, 'public/javascripts/vendor/parse-1.2.17.js'),
            'pace': resolveBowerPath('pace/pace.js')
        }
    },

    module: {
        loaders: [
            { test: /\.hbs$/, loader: "handlebars-loader" }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'underscore',
            Backbone: 'backbone',
            Marionette: 'backbone.marionette'
        })
    ]
};