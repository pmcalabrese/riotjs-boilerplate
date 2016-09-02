// Import modules
var concat = require('gulp-concat');

// Import paths
var paths = require('./gulp.paths.js');

module.exports = function(gulp){

	gulp.task('libs.script', 'Process the scripts from the external libs' , function() {
		return gulp.src(paths.libs.script)
			.pipe(concat('libs.js'))
			// .pipe(gulpif(getenv(['production','stage']), uglify()))
			.pipe(gulp.dest('js/', { cwd: paths.dist }));
	});
};
