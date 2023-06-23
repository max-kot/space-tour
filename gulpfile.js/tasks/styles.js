const app = require('../config/app.js');
const path = require('../config/path.js');
const settings = require('../config/settings.js');

function styles() {
	return app.gulp.src(path.styles.src)
		.pipe(app.plumber(
			app.notify.onError({
			  title: "SCSS",
			  message: "Error: <%= error.message %>"
			})
		 ))
		 // таски для обычного style.css
		.pipe(app.sass())
		//.pipe(app.webpCss())
		.pipe(app.autoprefixer(settings.autoprefixer))
		.pipe(app.groupCssMediaQueries())
		.pipe(app.gulp.dest(path.styles.dest))
		// минифицарованный style.min.css
		.pipe(app.sass(settings.sass))
		.pipe(app.concat('style.min.css'))
		//.pipe(app.webpCss())
		.pipe(app.autoprefixer(settings.autoprefixer))
		.pipe(app.groupCssMediaQueries())
		.pipe(app.shorthandCss())
		.pipe(app.cleanCss(settings.cleanCss))
		.pipe(app.gulp.dest(path.styles.dest))
		.pipe(app.browserSync.stream())
}

module.exports = styles;