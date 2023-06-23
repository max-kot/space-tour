const app = require('../config/app.js');
const path = require('../config/path.js');
const settings = require('../config/settings.js');

function copyFront() {
	return app.gulp.src([
		`${path.src}/**/*.*`,
		`!${path.src}/html/**/*.html`,
		`!${path.src}/includes/**/*.html`,
		`!${path.src}/scss/**/*.{scss,css,sass}`,
		`!${path.src}/js/modules/**/*.*`,
		`!${path.src}/js/main.js`,
		`!${path.src}/js/main.min.js.LICENSE.txt`,
		`!${path.src}/images/src/**/*.*`,
		`!${path.src}/fonts/src/**/*.*`,
	])
		.pipe(app.gulp.dest(path.dest))
}

module.exports = copyFront;