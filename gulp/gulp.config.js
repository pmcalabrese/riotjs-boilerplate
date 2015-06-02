var globalPath = {
    app : "../src/",
    bower : "../bower_components/"
};

module.exports = {
	app: {
        copy: [
            globalPath.app+"index.html"
        ],
        script:[
            globalPath.app+"js/main.js"
        ],
        components:[
            globalPath.app+"js/components/*"
        ]
    },
    libs: {
        script:[
            globalPath.bower+"riot/riot+compiler.min.js"
        ]
    },
    dist : "../dist/"
};
