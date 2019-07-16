// з папки upp в папку dist


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rigger = require('gulp-rigger');
var cssimport = require("gulp-cssimport");
var imagemin = require('gulp-imagemin');


gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(cssimport())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('jshint', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(rigger())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('compress', function() {
    gulp.src('app/images/**/*')
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {
                        removeViewBox: true
                    }
                ]
            })
        ], {
            verbose: true
        }))

        .pipe(gulp.dest('dist/images'))
});



gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});



gulp.task('browserSync',  function() {                              // створює сервер
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('watch', function(){                                      // дивиться за змінами
    gulp.watch('app/**/*.html', gulp.series('html'));
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));          // шлях до паки з scss
    gulp.watch('app/js/**/*.js', gulp.series('jshint'));            // шдях до папки з js
    gulp.watch('app/img/**/*.', gulp.series('compress'));           // шлях до пакпи images
});


gulp.task('build', gulp.parallel('sass','html','jshint', 'compress'));          // будує змінами

gulp.task('default', gulp.series(                                   // паралельно запускає
    gulp.parallel('watch', 'build', 'browserSync')
));
