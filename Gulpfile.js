const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

gulp.task('styles',()=>{
    return gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'))
})

gulp.task('assets' , ()=>{
    return gulp
        .src('assets/*')
        .pipe(gulp.dest('public'))
})

// gulp.task('watch', () => {
//     gulp.watch('app.scss', gulp.series('styles'));
//     gulp.watch('asset/*', gulp.series('assets'));
// });

gulp.task('default', gulp.series('styles', 'assets'));