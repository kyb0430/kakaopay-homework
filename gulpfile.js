const { src, dest, watch, series, parallel } = require('gulp');
const webserver = require('gulp-webserver');
const del = require('del');
const include = require('gulp-file-include');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');

function server() {
	return src('./dist').pipe(webserver({
		host: '0.0.0.0',
		port: 8000,
		livereload: false,
		open: false,
		directoryListing: {
			enable: true,
			path: './dist',
		},
	}))
	
	.on('error', function(e) {
		console.log(e);
		this.emit('end');
	});
}

function htmlDel() {
	return del('./dist/html');
}

function htmlBuild() {
	return src([
		`./src/**/*.html`
	])

	.pipe(include({
		indent: true
	}))
	.on('error', function(e) {
		console.log(e);
		this.emit('end');
	})

	.pipe(dest(`./dist`));
}

const html = series(htmlDel, htmlBuild);

function styleDel() {
	return del('./dist/css');
}

function styleBuild() {
	return src('./src/scss/**/*.scss', { sourcemaps: true })

	.pipe(sassGlob())

	.pipe(sass({
		errLogToConsole: true,
		outputStyle: 'nested' // nested, expanded, compact, or compressed.
	}).on('error', sass.logError))

	.pipe(autoprefixer({
		cascade: true,
		remove: false
	}))

	.pipe(dest('./dist/css', { sourcemaps: '.' }));
}

const style = series(styleDel, styleBuild);

function watchFiles() {
  watch(`./src/**/*.html`, html);
  watch('./src/scss/**/*.scss', style);
}

exports.build = parallel(html, style);
exports.watch = watchFiles;
exports.default = parallel(series(html, server), style, watchFiles);