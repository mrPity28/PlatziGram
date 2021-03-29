const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('babelify')
const broserify = require('browserify')
const source = require('vinyl-source-stream')


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

gulp.task('scripts' , ()=>{
    return broserify('./src/index.js')
        .transform(babel)
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'))
})


gulp.task('default', gulp.series('styles', 'assets' , 'scripts'));