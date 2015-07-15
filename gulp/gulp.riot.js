// Import config
var config = require('./gulp.config.js');
var riot = require('gulp-riot');

// Html module
module.exports = function(gulp){

	gulp.task('riot', 'compile riotjs tags', function(){
        return gulp.src(config.app.components)
            .pipe(riot())
			.pipe(gulp.dest('js/components',{cwd:config.dist}));
    });
};
