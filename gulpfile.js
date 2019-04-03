const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style() {
	// 1. setup source path
	return gulp.src('./scss/**/*.scss')
	// 2. send the files to gulp-sass compiler
	.pipe(sass().on('error', sass.logError))
	// 3. setup destination path
	.pipe(gulp.dest('./assets/css'))
	// 4. stream changes to all browsers
	.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./assets/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;