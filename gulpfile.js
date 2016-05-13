var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var __SRC = './sass/adminplus.scss';
var __DIST = './dist';
var __WATCH = './sass/**/*';

function sass (src, dist, minify) {
	return gulp.src(src)
		// Compile Sass
		.pipe($.sass({ 
			// Resolve Sass file imports from node_modules
			importer: require('sass-importer-npm') 
		})
		// Handle errors
		.on('error', $.sass.logError))
		// Post CSS
		.pipe($.postcss([
			// autoprefixer
			require('autoprefixer')({ browsers: ['last 2 versions'] })
		]))
		.pipe($.if(minify, gulp.dest(dist)))
		// (optional) Minify CSS
		.pipe($.if(minify, $.cleanCss()))
		// Write CSS file
		.pipe(gulp.dest(dist))
}

// Build dev
gulp.task('build:dev', function () {
	return sass(__SRC, __DIST);
});

// Build production
gulp.task('build', function () {
	return sass(__SRC, __DIST, true);
});

// Watch
gulp.task('watch', ['build:dev'], function () {
	gulp.watch(__WATCH, ['build:dev']);
});

gulp.task('default', ['build']);