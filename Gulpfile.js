var gulp = require('gulp'),
    gutil = require('gulp-util'),
    path = require('path'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync');

var webpack = require('webpack'),
    webpackConfig = require('./client/webpack.config'),
    paths = require('./paths');

gulp.task('compass', function () {
    return gulp.src(paths.all.sass)
        .pipe(compass({
            project: path.join(__dirname, 'client/public'),
            css: 'stylesheets',
            sass: '../sass',
            font: 'fonts',
            image: 'images'
        }));
});

gulp.task('webpack', function (callback) {
    webpackConfig.entry = paths.client.app;
    webpackConfig.output = {
        path: paths.client.build.dir,
        filename: paths.client.build.fileName
    };

    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('browser-sync', function () {
    browserSync.init([
        paths.all.css,
        paths.all.html,
        paths.client.build.output()
    ], {
        server: {
            baseDir: './client/public'
        }
    });
});

gulp.task('watch-sass', function () {
    gulp.watch(paths.all.sass, ['compass']);
    gulp.watch(paths.client.app, ['webpack']);
});

gulp.task('watch', ['watch-sass', 'browser-sync']);
gulp.task('default', ['watch']);


