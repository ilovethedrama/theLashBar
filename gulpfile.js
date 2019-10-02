"use strict";

const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoPrefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create(),
    plumber = require("gulp-plumber"),
    nodemon = require("gulp-nodemon");

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

        // this says don't open a new page every time but do refresh when a change is injected
        // open: false,
        // injectChanges: true,
        // proxy: '127.0.0.1:3000/',
        proxy: {
            target: "localhost:" + 3000 + "/"
        },
        files: ['app.js'],
        // host: 'localhost',
        // port: 3000

        // /*this says serve the file from this directory - by default its an index.html file
        // server: {
        //     baseDir: "./"
        // }

    });
    done();
};

bSync.description = "allows for live browser view of file as changes are made";

var watcher = () => {
    gulp.watch("styles/SCSS/*.scss").on("change", scssToCss);
    gulp.watch("views/*.ejs").on("change", browserSync.reload);
};

var server = function () {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'app.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["app.js", "views/*.ejs", 'styles/SCSS/*.scss'],
        ext: 'js'
        // Below i'm using es6 arrow functions but you can remove the arrow and have it a normal .on('restart', function() { // then place your stuff in here }
    }).on('restart', () => {
        gulp.src('app.js')
            // I've added notify, which displays a message on restart. Was more for me to test so you can remove this
            .pipe(notify('Running the start tasks and stuff'));
    });
};
// var server = function () {
//     // configure nodemon
//     nodemon({
//         // the script to run the app
//         script: 'app.js',
//         // this listens to changes in any of these files/routes and restarts the application
//         watch: ["app.js", "views/*.ejs", 'styles/SCSS/*.scss'],
//         ext: 'js'
//         // Below i'm using es6 arrow functions but you can remove the arrow and have it a normal .on('restart', function() { // then place your stuff in here }
//     }).on('restart', () => {
//         gulp.src('app.js')
//             // I've added notify, which displays a message on restart. Was more for me to test so you can remove this
//             .pipe(notify('Running the start tasks and stuff'));
//     });
// };

gulp.task("tester", gulp.series(scssToCss));
gulp.task("default", gulp.parallel(server, scssToCss, watcher));
gulp.task("wine", gulp.series(gulp.parallel(bSync, scssToCss, watcher), server));