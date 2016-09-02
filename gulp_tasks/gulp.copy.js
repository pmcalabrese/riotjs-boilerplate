// Import paths
var paths = require('./gulp.paths.js');

// Html module
module.exports = function(gulp){

	gulp.task('copy', 'Copy files that does not to be processed from the source to the dist folder', function(){
		gulp.src(paths.app.copyapp)
            .pipe(gulp.dest('js',{cwd:paths.dist}));

		return gulp.src(paths.app.copy)
            .pipe(gulp.dest('.',{cwd:paths.dist}));
    });
};
