// Include gulp with help
var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

// Get/set variables
var config = require('./gulp.config');

///
///	 Import modularized tasks
///

// Imports Copy - just copy some file to the dist directorya
require('./gulp.copy')(gulp);

// Imports libs script - compile all js file in one filec alled libs.js
require('./gulp.libs.script')(gulp);

// Imports Serve - spin a development server on port 8000
require('./gulp.serve')(gulp);

// Imports Riot - spin a development server on port 8000
require('./gulp.riot')(gulp);

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
    gulp.watch(config.app.copy, ['copy']);
    gulp.watch(config.app.components, ['riot']);
    gulp.watch(config.libs.script, ['libs.script']);
});
