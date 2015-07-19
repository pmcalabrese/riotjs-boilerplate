var globalPath = {
    app : "./src/",
    node: "./node_modules/"
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
            globalPath.node+"riot/riot+compiler.min.js",
            globalPath.node+"riotgear/dist/rg.min.js"
        ]
    },
    dist : "../../dist"
};
