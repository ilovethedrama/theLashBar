"use strict";

const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoPrefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create(),
    exec = require('child_process').exec,
    plumber = require("gulp-plumber"),
    notify = require('gulp-notify'),
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

var closeServ = function shower(done) {
    exec('killall mongod', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
    })
}

var servah = function endGame(done) {
    exec('node app.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        done(err);
    });
    // exec('mongod', function (err, stdout, stderr) {
    //     console.log(stdout);
    //     console.log(stderr);
    //     done(err);
    // });
}

scssToCss.description =
    "changes scss to css and adds autoprefixes for browser support";

var bSync = done => {
    browserSync.init({
        proxy: 'localhost:3000'

    });
    done();
};

bSync.description = "allows for live browser view of file as changes are made";

var watcher = () => {
    gulp.watch("styles/SCSS/*.scss").on("change", scssToCss);
    gulp.watch("views/partials/*.ejs").on("change", browserSync.reload);
};

var server = function (done) {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'app.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["app.js", "./views/partials/*.ejs", './styles/SCSS/*.scss'],
        ext: 'js'
        // Below i'm using es6 arrow functions but you can remove the arrow and have it a normal .on('restart', function() { // then place your stuff in here }
    }).on('restart', () => {
        gulp.src('app.js')
            // I've added notify, which displays a message on restart. Was more for me to test so you can remove this
            .pipe(notify('Running the start tasks and stuff'));
    });
    done();
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
gulp.task("tester2", gulp.series(servah));
gulp.task("tester3", gulp.series(server));
gulp.task("tester3a", gulp.series(bSync));
gulp.task("default", gulp.parallel(server, scssToCss, watcher));
gulp.task("wine", gulp.series(gulp.parallel(bSync, scssToCss, watcher), server));