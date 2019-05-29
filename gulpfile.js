/**
 * Created by LCQ on 2019-05-28,0028.
 */
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglifyjs')
const rename = require('gulp-rename')

gulp.task('default', () => {
    return gulp.src('src/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(rename('vue-luye-tools.es5.js'))
        // .pipe(gulp.dest('dist'))
        .pipe(uglify()) // 压缩
        .pipe(rename('vue-luye-tools.min.js')) // 重命名
        .pipe(gulp.dest('dist')) // 目标目录
})