// Import modules
var server = require('gulp-server-livereload');

// Import paths
var paths = require('./gulp.paths.js');

var serverOptions = {
	port:8000,
	host:"0.0.0.0",
	livereload: {
		enable: true
	},
	directoryListing: false,
	defaultFile: 'index.html'
};

// Takana module
module.exports = function(gulp){
	gulp.task('serve', 'run a static Node.js server for development on port '+serverOptions.port, function() {
	  gulp.src(paths.dist)
	    .pipe(server(serverOptions));
	});
};
