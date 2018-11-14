const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const distDirectory = 'dist';
const htmlBlob = 'src/*.html';
const imagesBlob = 'src/images/**';
const fontsBlob = 'src/fonts/**';
const stylesBlob = 'src/css/**';
const sassBlob = 'src/scss/**';
const outSass = 'dist/css/';
const htmlTemp = 'src/**/*.html';
const jsBlob = 'src/js/*.js';

gulp.task('start', () => runSequence('build', 'serve'));

gulp.task('build', () => runSequence(
  'cleanDist',
  ['processStyles', 'processHtml', 'processImages', 'processFonts', 'sass', 'htmlTemp', 'processJs'],
));

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: distDirectory,
    },
  });

  gulp.watch(htmlBlob, () => runSequence('processHtml', 'reloadBrowser'));

  gulp.watch(jsBlob, () => runSequence('processJs', 'reloadBrowser'));

  gulp.watch(htmlTemp, () => runSequence('htmlTemp', 'reloadBrowser'));

  gulp.watch(imagesBlob, () => runSequence('processImages', 'reloadBrowser'));

  gulp.watch(fontsBlob, () => runSequence('processFonts', 'reloadBrowser'));

  gulp.watch(stylesBlob, () => runSequence('processStyles', 'reloadBrowser'));

  gulp.watch(sassBlob, () => runSequence('sass', 'reloadBrowser'));
});

gulp.task('cleanDist', () => gulp.src(distDirectory, { read: false, allowEmpty: true }).pipe(clean()));

gulp.task('processHtml', () => gulp.src(htmlBlob)
  .pipe(gulp.dest(distDirectory)));

gulp.task('processJs', () => gulp.src(jsBlob)
  .pipe(gulp.dest(distDirectory)));

gulp.task('htmlTemp', () => gulp.src(htmlTemp)
  .pipe(gulp.dest(distDirectory)));

gulp.task('processImages', () => gulp.src(imagesBlob)
  .pipe(gulp.dest(`${distDirectory}/images/`)));

gulp.task('processFonts', () => gulp.src(fontsBlob)
  .pipe(gulp.dest(`${distDirectory}/fonts/`)));

gulp.task('processStyles', () => gulp.src(stylesBlob)
  .pipe(concat('styles.css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
  }))
  .pipe(gulp.dest(`${distDirectory}/css`)));

gulp.task('sass', () => gulp.src(sassBlob)
  .pipe(sass())
  .pipe(gulp.dest(outSass)));

gulp.task('reloadBrowser', (done) => {
  browserSync.reload();
  done();
});
