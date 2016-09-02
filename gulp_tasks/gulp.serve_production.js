// Import modules

// Import paths
var paths = require('./gulp.paths.js');

// Takana module
module.exports = function (gulp) {

    // EXPRESS server with compression enabled;
    var PORT = 8000;
    var express = require('express');
    var serveStatic = require('serve-static');
    var compression = require('compression');

    gulp.task('serve.production', 'Run a static Node.js server for development on port ' + PORT, function () {
        var app = express();
        app.use(compression());
        app.use(serveStatic(paths.dist));
        app.listen(PORT);

        console.log("Express server started on port", PORT);
        return gulp.src(paths.dist);
    });
};
