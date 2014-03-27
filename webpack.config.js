var path = require('path');
var webpack = require('webpack');

var resolveBowerPath = function(componentPath) {
    return path.join(__dirname, 'bower_components', componentPath);
};

module.exports = {
    cache: true,

    //entry: '/app/app.js',
    //output: 'bundle.js',

    resolve: {
        alias: {
            jquery: resolveBowerPath('/jquery/dist/jquery.js'),
            underscore: resolveBowerPath('/underscore/underscore.js'),
            backbone: resolveBowerPath('/backbone/backbone.js'),
            'backbone.wreqr': resolveBowerPath('/backbone.wreqr/lib/amd/backbone.wreqr.js'),
            'backbone.babysitter': resolveBowerPath('/backbone.babysitter/lib/amd/backbone.babysitter.js'),
            'backbone.marionette': resolveBowerPath('/backbone.marionette/lib/core/amd/backbone.marionette.js'),
            'parse': path.join(__dirname, 'public/vendor/parse-1.2.17.js')
        }
    },
    module: {
        loaders: [
            { test: /\.hbs$/, loader: "handlebars-loader" }
        ]
    }
};