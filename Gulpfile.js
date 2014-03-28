var gulp = require('gulp'),
    path = require('path'),
    compass = require('gulp-compass');

var paths = {
    sass: './client/sass/*.scss'
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

gulp.task('watch-sass', function () {
    gulp.watch(paths.sass, ['compass']);
});

gulp.task('watch', ['watch-sass']);