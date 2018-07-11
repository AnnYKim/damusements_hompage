// Gulp 모듈 호출
var gulp = require("gulp");

// 플러그인 패키지 모듈 호출
var concat = require("gulp-concat"),
  uglify = require("gulp-uglifyes"),
  rename = require("gulp-rename"),
  minifyhtml = require("gulp-minify-html"),
  imagemin = require("gulp-imagemin"),
  sourcemaps = require("gulp-sourcemaps"),
  sass = require("gulp-sass"),
  webserver = require("gulp-webserver"),
  browserSync = require("browser-sync").create();

// 경로 변수
var src = "app/src";
var dist = "app/dist";
var paths = {
  html: src + "/*.html",
  scss: src + "/css/scss/**/*.scss",
  image: src + "/images/**/*"
};

// SASS 옵션
var sassOptions = {
  outputStyle: "compact",
  // outputStyle: "compressed",
  indentType: "tab"
};

// =============================
// HTML 압축
gulp.task("minify-html", function() {
  return gulp
    .src(paths.html)
    .pipe(minifyhtml())
    .pipe(gulp.dest(dist))
    .pipe(browserSync.stream());
});
// =============================

// =============================
// SASS 컴파일 업무 정의
gulp.task("compile-scss", function() {
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(src + "/css"))
    .pipe(gulp.dest(dist + "/css"))
    .pipe(browserSync.stream());
});
// =============================

// =============================
// 폰트 카피
gulp.task("copy-font", function() {
  return gulp.src(src + "/fonts/**/*").pipe(gulp.dest(dist + "/fonts"));
});
// =============================

// =============================
// 이미지 카피
gulp.task("copy-image", function() {
  return gulp.src(paths.image).pipe(gulp.dest(dist + "/images"));
});
// =============================

// =============================
// 이미지 압축
gulp.task("minify-image", function() {
  return gulp
    .src([paths.image, "!app/src/images/**/*.svg"])
    .pipe(imagemin())
    .pipe(gulp.dest(dist + "/images"));
});
// =============================

// =============================
// browserSync 업무 정의
gulp.task("browserSync", function() {
  return browserSync.init({
    port: 3232,
    server: {
      baseDir: "app/dist"
    }
  });
});
// =============================

// =============================
// watch 업무 정의
gulp.task("watch", function() {
  gulp.watch(paths.html, { interval: 1000 }, ["minify-html"]);
  gulp.watch(paths.scss, ["compile-scss"]);
  gulp.watch(paths.image, { interval: 1000 }, ["copy-image"]);
});
// =============================

// =============================
// default 정의
gulp.task("default", [
  "minify-html",
  "copy-image",
  "compile-scss",
  "copy-font",
  "browserSync",
  "watch"
]);
// =============================
