var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('micCheck', function(fin) {
    console.log(
        'Yo, microphone check one two what is this,' + '\n' + 
        'The five foot assassin with the ruffneck business,' + '\n' +
        'I float like gravity, never had a cavity,' + '\n' +
        'Got more rhymes than the Winans got family');
        fin();
});

gulp.task('sass', function() {
    // this searches within the styles/scss folder for any files ending scss or sass
    return gulp.src('styles/scss/*.+(scss|sass)')
    .pipe(sass())
    .pipe(gulp.dest('styles/css'),
    gulp.watch('styles/scss/*.+(scss|sass)', gulp.series('sass'))
    )
});




// the (old) way to watch a file in gulp 3.0 Version 4 is above ^^
// gulp.watch('styles/scss/*.+(scss|sass)', ['sass']); 
