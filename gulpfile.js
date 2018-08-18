var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

// gulp.task('imagemin', function() {
//     return gulp.src('src/s/images/*')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{ removeViewBox: false }],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('src/assets/'));
// });

gulp.task('sass', function() {
    return gulp.src('src/App.scss')
        .pipe(sass({ outputStyle: 'compressed', errLogToConsole: true }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(sourcemaps.write('./'))
        .pipe(concat('App.css'))
        .pipe(gulp.dest('src/'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch(['src/App.css'], function(files) {
        livereload.changed(files);
    });
});