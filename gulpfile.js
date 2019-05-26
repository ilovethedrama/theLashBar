const {
  watch,
  series,
  parallel,
  src,
  dest,
  gulp
} = require('gulp');

// var { gulp, series, dest }    = require('gulp'),

// var sass    = require('gulp-sass'),
//     open    = require('gulp-open'),
//     connect = require('gulp-connect');

// gulp.task('micCheck', function(fin) {
//     console.log(
//         'Yo, microphone check one two what is this,' + '\n' + 
//         'The five foot assassin with the ruffneck business,' + '\n' +
//         'I float like gravity, never had a cavity,' + '\n' +
//         'Got more rhymes than the Winans got family');
//         fin();
// });

// gulp.task('sass', function() {
//     // this searches within the styles/scss folder for any files ending scss or sass
//     return gulp.src('styles/scss/*.+(scss|sass)')
//     .pipe(sass())
//     .pipe(gulp.dest('styles/css'),
//     gulp.watch('styles/scss/*.+(scss|sass)', gulp.series('sass'))
//     )
// });


// Launch Chrome web browser
// https://www.npmjs.com/package/gulp-open

// function openBrowser(done) {
//     var options = {
//       uri: 'http://localhost:8080'
//     };
//     return src('./')
//     .pipe(open(options));
//     done();
//   }

// Gulp plugin to run a webserver (with LiveReload)
// https://www.npmjs.com/package/gulp-connect

// function server(done) {
//   return connect.server({
//     root: './',
//     port: 8080,
//     debug: true,
//   });
//   done();
// }

// Default Gulp command
// exports.default = series(openBrowser, server);

// the (old) way to watch a file in gulp 3.0 Version 4 is above ^^
// gulp.watch('styles/scss/*.+(scss|sass)', ['sass']); 