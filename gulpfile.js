// Include gulp with help
var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

// import paths
var paths = require('./gulp_tasks/gulp.paths');

///
///	 Import modularized tasks
///

// Imports Copy - just copy some file to the dist directorya
require('./gulp_tasks/gulp.copy')(gulp);

// Imports libs script - compile all js file in one filec alled libs.js
require('./gulp_tasks/gulp.libs.script')(gulp);

// Imports Serve - spin a development server on port 8000
require('./gulp_tasks/gulp.serve')(gulp);

// Imports Riot - spin a development server on port 8000
require('./gulp_tasks/gulp.riot')(gulp);

// Imports Serve production - spin an express server with compression
require('./gulp_tasks/gulp.serve_production')(gulp);

///
///  Setup group tasks
///

// Creates a default build task
gulp.task('default', "It runs sass copy ts libs.script and libs.css", ['copy', 'riot', 'libs.script'], function(cb) {
    // runSequence(['sass'], cb);
});

// Creates a watch task to watch files and build async
gulp.task('watch', 'It runs the default task and then serve, while it serves whatch for files and run the task accordingly. If you are a developer you want to start from here' ,function (cb) {
    runSequence(['default','serve'],cb);
    gulp.watch(paths.app.copy, ['copy']);
    gulp.watch(paths.app.components, ['riot']);
    gulp.watch(paths.libs.script, ['libs.script']);
});
