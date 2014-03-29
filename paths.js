var path = require('path');

exports.all = {
    sass: './client/sass/**/*.scss',
    css: './client/public/**/*.css',
    html: './client/public/**/*.html',
    handlebars: './client/app/**/*.hbs'
};

exports.client = {
    allScripts: path.join(__dirname, 'client/app/**/*.js'),
    app: path.join(__dirname, 'client/app/committed.js'),
    build: {
        dir: path.join(__dirname, 'client/public/javascripts'),
        fileName: 'build.js',
        output: (function () {
            var build = this.client.build;
            return path.join(build.dir, build.fileName);
        }).bind(this)
    }
};