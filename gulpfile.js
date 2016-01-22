var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var ts          = require('gulp-typescript');
var merge       = require('merge2');

//setup info here: https://www.browsersync.io/docs/gulp/

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'scripts'], function() {
    browserSync.init({
    	injectChanges: true,
        server: "./public"
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

//Compile TS into JS & auto-inject into browsers
gulp.task('scripts', function() {
	var tsResult = gulp.src('app/ts/**/*.ts')
		.pipe(ts({
			declaration: true,
			noExternalResolve: true
		}));
 
	return merge([
		tsResult.dts.pipe(gulp.dest('public/definitions')),
		tsResult.js.pipe(gulp.dest('public/js'))
	]).pipe(browserSync.stream());
});

gulp.task('default', ['serve'], function(){
	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch("app/ts/**/*.ts", ['scripts']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});