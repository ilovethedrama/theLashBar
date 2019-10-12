"use strict";

const browserSync = require("browser-sync").create(),
    autoPrefixer = require("gulp-autoprefixer"),
    uglifycss = require('gulp-uglifycss'),
    plumber = require("gulp-plumber"),
    nodemon = require("gulp-nodemon"),
    notify = require('gulp-notify'),
    sass = require("gulp-sass"),
    gulp = require("gulp");

const scssToCss = () => {
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



const distill = () => {
    return gulp.src('./styles/CSS/lashbar.css')
        .pipe(uglifycss({
            'uglyComments': true
        }))
        .pipe(gulp.dest('./producki/'))
}

let thePausinator;

const holdIt = () => {
    thePausinator = setTimeout(bSync, 3000);
}

const bSync = () => {
    browserSync.init({
        proxy: 'localhost:3000',
        port: 3003,
        online: true,
        tunnel: 'yoMamaHouse'

    });
    // done();
};





bSync.description = "allows for live browser view of file as changes are made";

var watcher = (done) => {
    gulp.watch("styles/SCSS/*.scss").on("change", scssToCss);
    gulp.watch("views/partials/*.ejs").on("change", browserSync.reload);
    done();
};
watcher.description = "watches both the ejs and scss files and triggers a browser reload or css injection";




const server = function (done) {
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
            .pipe(notify('restarting the server file now'));
    });
    done();
};





// this works
gulp.task("tester3", gulp.parallel(server, bSync));
gulp.task('now', gulp.parallel(gulp.series(scssToCss), watcher));

/*This starts the server and also browserSync and then watches for 
changes to the scss files and ejs files and updates the browser if
 either one changes and also injects css when scss is ListeningStateChangedEvent. SICCKKK */
gulp.task("default", gulp.parallel(server, holdIt, gulp.parallel(gulp.series(scssToCss), watcher)));