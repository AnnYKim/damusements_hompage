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
  browserSync = require("browser-sync").create(),
  header = require("gulp-header");

// 경로 변수
var src = "app/src";
var dist = "app/dist";
var paths = {
  html: src + "/*.html",
  scss: src + "/css/scss/**/*.scss",
  image: src + "/images/**/*",
  jsVendor: src + "/js/vendors/**/*.js",
  jsMine: src + "/js/script/**/*.js"
};

// SASS 옵션
var sassOptions = {
  // outputStyle: "compact",
  outputStyle: "compressed",
  indentType: "tab"
};

// 타임스탬프용 날짜 생성
Object.defineProperty(Date.prototype, "YYYYMMDDHHMMSS", {
  value: function() {
    function pad2(n) {
      // always returns a string
      return (n < 10 ? "0" : "") + n;
    }

    return (
      this.getFullYear() +
      "-" +
      pad2(this.getMonth() + 1) +
      "-" +
      pad2(this.getDate()) +
      " " +
      pad2(this.getHours()) +
      ":" +
      pad2(this.getMinutes()) +
      ":" +
      pad2(this.getSeconds())
    );
  }
});

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
  var myDate = new Date().YYYYMMDDHHMMSS();

  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(header("/* ////// Last Modified: '" + myDate + "'////// */"))
    .pipe(gulp.dest(src + "/css"))
    .pipe(gulp.dest(dist + "/css"))
    .pipe(browserSync.stream());
});
// =============================

// =============================
// html 카피
gulp.task("copy-html", function() {
  return gulp
    .src(paths.html)
    .pipe(gulp.dest(dist))
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
// 벤더 JS 합치기
gulp.task("copy-vendorJS", function() {
  return gulp
    .src(paths.jsVendor)
    .pipe(concat("vendors.js"))
    .pipe(gulp.dest(dist + "/js"))
    .pipe(gulp.dest(src + "/js"));
});
// =============================

// =============================
// 작성한 JS 압축 및 합치기
gulp.task("minify-myJS", function() {
  var myDate = new Date().YYYYMMDDHHMMSS();

  return gulp
    .src(paths.jsMine)
    .pipe(concat("script.js"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(uglify())
    .pipe(header("/* ////// Last Modified: '" + myDate + "'////// */"))
    .pipe(gulp.dest(dist + "/js"))
    .pipe(gulp.dest(src + "/js"))
    .pipe(browserSync.stream());
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
  // gulp.watch(paths.html, { interval: 1000 }, ["minify-html"]);
  gulp.watch(paths.html, { interval: 1000 }, ["copy-html"]);
  gulp.watch(paths.scss, ["compile-scss"]);
  gulp.watch(paths.image, { interval: 1000 }, ["copy-image"]);
  gulp.watch(paths.jsMine, { interval: 1000 }, ["minify-myJS"]);
});
// =============================

// =============================
// default 정의
gulp.task("default", [
  // "minify-html",
  "copy-html",
  "copy-image",
  "compile-scss",
  "copy-font",
  "copy-vendorJS",
  "minify-myJS",
  "browserSync",
  "watch"
]);
// =============================
