"use strict";

const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoPrefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create(),
    plumber = require("gulp-plumber");

var test = async () => {
    console.log(
        `
    sup 
    sup 
    sup
    `
    );
};
test.description = "test to make sure gulp works";

var scssToCss = () => {
    return gulp
        .src("./styles/SCSS/lashbar.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(gulp.dest("./styles/CSS"))
        .pipe(
            browserSync.stream({
                match: "**/*.css"
            })
        );
};

scssToCss.description =
    "changes scss to css and adds autoprefixes for browser support";

var bSync = done => {
    browserSync.init({
        server: {
            baseDir: "app.js"
        },
        // files: ["views/*.ejs", "views/partials/.*ejs", "styles/SCSS"],
        port: 3000
    });
    done();
};

bSync.description = "allows for live browser view of file as changes are made";

var watcher = () => {
    gulp.watch("styles/SCSS/*.scss").on("change", scssToCss);
    gulp.watch("views/*.ejs").on("change", browserSync.reload);
};

gulp.task("tester", gulp.series(test));
gulp.task("default", gulp.parallel(bSync, watcher));