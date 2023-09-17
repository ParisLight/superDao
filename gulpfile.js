const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const fontmin = require("gulp-fontmin");

const webpackConfig = require('./webpack.config.js');
const webpackStream = require("webpack-stream");

gulp.task("webpack", function () {
  return gulp
    .src("src/js/index.js")
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest("dist/js"));
});

gulp.task('scripts', gulp.series('webpack'));

// Compile Pug to HTML
gulp.task("pug", function () {
  return gulp
    .src("src/pug/**/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Compile SCSS to CSS
gulp.task("sass", function () {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
  return gulp
    .src("src/fonts/**/*.{ttf, otf, woff, woff2, eot, svg}")
    .pipe(fontmin())
    .pipe(gulp.dest("dist/fonts"));
});

gulp.task("images", function () {
  return gulp
    .src("src/images/**/*.{jpg,jpeg,png,gif,svg}")
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.stream());
});

// Watch files for changes
gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch("src/pug/**/*.pug", gulp.series("pug"));
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("src/js/**/*.js", gulp.series("scripts"));
  gulp.watch("src/images/**/*.{jpg,jpeg,png,gif,svg}", gulp.series("images"));
  gulp.watch(
    "src/fonts/**/*.{ttf, otf, woff, woff2, eot, svg}",
    gulp.series("fonts")
  );
});

gulp.task(
  "default",
  gulp.series("pug", "sass", "scripts", "images", "fonts", "watch")
);
