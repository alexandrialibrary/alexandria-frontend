var gulp = require('gulp');

var serve = require('gulp-serve')
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var vulcanize = require('gulp-vulcanize');
var gutil = require('gulp-util');

gulp.task('vulcanize', function () {
	    return gulp.src('../src/index.html')
	        .pipe(vulcanize({
				dest: '../build',
	            abspath: '',
	            excludes: [],
	            stripExcludes: false,
		        stripComments: true
	        }))
    		.on("error", gutil.log)
	        .pipe(gulp.dest('build'))
		}
	);

gulp.task('serve', ['coffee', 'sass'], serve('.'));

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

gulp.task('coffee', function(){
	return gulp.src('coffee/*.coffee')
		.pipe(coffee()).on('error', gutil.log)
		.pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('coffee/*.coffee', ['coffee']);
});

gulp.task('watch-serve', ['watch', 'serve'])

gulp.task('default', ['sass', 'coffee']);
