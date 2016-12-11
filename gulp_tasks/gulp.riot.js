// Import paths
var paths = require('./gulp.paths.js');
var riot = require('gulp-riot');

// Html module
module.exports = function(gulp){

	gulp.task('riot', 'compile riotjs tags', function(){
        return gulp.src(paths.app.components)
            .pipe(riot({
                compact: true
            }))
			.pipe(gulp.dest('js/components',{cwd:paths.dist}));
    });
};
