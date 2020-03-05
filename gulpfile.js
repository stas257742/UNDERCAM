var gulp         = require('gulp'), // Вызываем GULP
    sass         = require('gulp-sass'), // Вызываем компилятор в css
    browserSync  = require('browser-sync'), // 
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиот
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем б
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов



                                                      //ТАСКИ

gulp.task('mytask', async function() {
    console.log('Привет Стас, всё получится!');
});

gulp.task('sass', function(done) {                    //SASS В Т.Ч С ПОЯВЛЕНЕМ ОШИБКИ 
    gulp.src('app/sass/**/*.sass')
      .pipe(sass().on('error', function(error) {
        // у нас ошибка
        done(error);
      }))
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
      .pipe(gulp.dest('app/css'))
      .on('end', function() {
        // у нас все закончилось успешно
        done();
      })
      .pipe(browserSync.reload({stream: true}))
  });

gulp.task('browser-sync', function() {                // BROWSER-SYNC
    browserSync({ // Выполняем browser Sync 
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', async function () {                // ДЛЯ РЕЛОАДА СКРИПТОВ
    return gulp.src(['app/js/**/*.js', 'app/libs/**/*.js'])
    .pipe(browserSync.reload({stream: true}))
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('code', async function () {                   // ДЛЯ РЕЛОАДА HTML
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', async function() {
    return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
});

gulp.task('clean', async function() {
    return del.sync('dist')
});

gulp.task('img', async function() {
    return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('prebuild', async function() {
    gulp.src([
        'app/css/main.css',
        'app/css/libs.min.css'
    ])
    .pipe(gulp.dest('dist/css'))

    gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('clear', async function() {
    return cache.clearAll();
});

gulp.task('watch', async function (){                  // WATCH
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch(['app/js/common.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));
});

gulp.task('watch1', gulp.parallel('sass',  'browser-sync', 'watch'))
gulp.task('default', gulp.parallel('css-libs', 'sass', 'scripts',  'browser-sync', 'watch'))
gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass', 'scripts'))
