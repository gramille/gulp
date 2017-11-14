// Requis
const path = require("path");
const gulp = require("gulp");

// Include plugins
const plugins = require("gulp-load-plugins")(); // tous les plugins de package.json

// Variables de chemins
const source = path.resolve(__dirname, "src");         // dossier de travail
const destination = path.resolve(__dirname, "assets"); // dossier de destination

//var notify = require("gulp-notify");

// Css task
gulp.task("css", () => gulp
    .src(source + "/scss/*.scss")
    .pipe(plugins.sass())
    .pipe(plugins.cssimport())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(plugins.rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(destination + "/css/"))
    .pipe(plugins.notify("♥ scss compiled ♥"))
);

// Css watch
gulp.task("watch-styles", ["css"], function () {

    gulp.watch(source + "/scss/*.scss", ["css"]);
});

// Javascript task
gulp.task("js", () => gulp
    .src(source + "/js/*.js")
    .pipe(plugins.minify({
        ext: {
            min: ".min.js"
        },
        noSource: true
    }))
    .pipe(gulp.dest(destination + "/js/"))
    .pipe(plugins.notify("♥ JavaScript compiled ♥"))
);

// JavaScript watch
gulp.task("watch-js", ["js"], function () {

    gulp.watch(source + "/js/*.js", ["js"]);
});

// Images task
gulp.task("images", () => gulp
    .src(source + "/img/**/*{gif,jpeg,jpg,png,svg}")
    .pipe(plugins.imagemin([
        plugins.imagemin.gifsicle({interlaced: true}),
        plugins.imagemin.jpegtran({progressive: true}),
        plugins.imagemin.optipng({optimizationLevel: 8}),
        plugins.imagemin.svgo({
            plugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest(destination + "/img/"))
    .pipe(plugins.notify("♥ Images compiled ♥"))
);

// Images watch
gulp.task("watch-images", ["images"], function () {

    gulp.watch(source + "/img/*.jpg", ["images"]);
});

// Watch all changes
gulp.task("watch", ["watch-styles", "watch-js", "watch-images"]);
