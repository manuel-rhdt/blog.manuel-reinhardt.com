var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer")

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/css"))
})

gulp.task("theme-scss", function () {
    gulp.src("themes/simple-blog/src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("themes/simple-blog/static/css"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "theme-scss"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("themes/simple-blog/src/scss/**/*", ["theme-scss"])
})

// Set watch as default task
gulp.task("default", ["watch"])