var GLOBAL_PATHS = {
    app : "./src/",
    node: "./node_modules/"
};

module.exports = {
	app: {
        copy: [
            GLOBAL_PATHS.app+"index.html"
        ],
        copyapp: [
            GLOBAL_PATHS.app+"js/app.js"
        ],
        components: [
            GLOBAL_PATHS.app+"js/components/*"
        ],
        components_dist:GLOBAL_PATHS.app+"js/components/"
    },
    libs: {
        script: [
            GLOBAL_PATHS.node+"riot/riot+compiler.min.js",
            GLOBAL_PATHS.node+"riotgear/dist/rg.min.js"
        ]
    },
    dist : "./dist"
};
