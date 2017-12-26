const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('./css/css.css')
        .pipe(autoprefixer({
            browsers: [">5%","Android >= 4.0"],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'))
);