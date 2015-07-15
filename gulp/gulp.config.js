var globalPath = {
    app : "../src/",
    bower : "../bower_components/"
};

module.exports = {
	app: {
        copy: [
            globalPath.app+"index.html"
        ],
        copyapp: [
            globalPath.app+"js/app.js"
        ],
        components: [
            globalPath.app+"js/components/*"
        ],
        components_dist:globalPath.app+"js/components/"
    },
    libs: {
        script: [
            globalPath.bower+"riot/riot+compiler.min.js"
        ]
    },
    dist : "../dist/"
};
