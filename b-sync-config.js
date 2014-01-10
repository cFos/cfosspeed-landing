module.exports = {
    files: ["www/assets/css/*.css", "www/*.html"],
    debugInfo: true,
    host: "192.168.1.2",
    ghostMode: {
        links: true,
        forms: true,
        scroll: true
    },
    server: {
        baseDir: "./",
        // index: "index.htm"
    },
    open: false,
    notify: true
};