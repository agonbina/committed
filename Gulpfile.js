var gulp = require('gulp'),
    path = require('path'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync');

var paths = {
    sass: './client/sass/**/*.scss',
    css: './client/public/**/*.css',
    html: './client/public/**/*.html'
};

gulp.task('compass', function () {
    return gulp.src(paths.sass)
        .pipe(compass({
            project: path.join(__dirname, 'client/public'),
            css: 'stylesheets',
            sass: '../sass',
            font: 'fonts',
            image: 'images'
        }));
});

gulp.task('browser-sync', function () {
   browserSync.init([paths.css, paths.html], {
       proxy: {
           host: 'localhost',
           port: '8080'
       }
   });
});

gulp.task('watch-sass', function () {
    gulp.watch(paths.sass, ['compass']);
});

gulp.task('watch', ['watch-sass', 'browser-sync']);
gulp.task('default', ['watch']);


