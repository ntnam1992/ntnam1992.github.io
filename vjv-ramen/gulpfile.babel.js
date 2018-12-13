/**
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

// import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import connectSSI from 'connect-ssi';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Optimize images
gulp.task('images', () =>
  gulp.src('src/assets/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.size({title: 'images'}))
);

// Copy all files at the root level (src)
gulp.task('copy', () =>
  gulp.src([
    'src/*',
    '!src/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}))
);

gulp.task('fonts', () => {
  return gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts/'))
    .pipe($.size({title: 'fonts'}))
});

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'src/assets/styles/**/*.scss',
    // 'src/assets/styles/**/*.css',
    'src/assets/styles/slick/_slick.scss',
    '!src/assets/styles/bootstrap/**/*.scss'
  ])
    .pipe($.newer('.tmp/assets/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/assets/styles'))
    // .pipe(browserSync.reload({stream: true}))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(gulp.dest('.tmp/assets/styles'));
});

// Compile and automatically prefix stylesheets
gulp.task('styles:stream', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'src/assets/styles/**/*.scss',
    // 'src/assets/styles/**/*.css',
    'src/assets/styles/slick/_slick.scss',
    '!src/assets/styles/bootstrap/**/*.scss'
  ])
    .pipe($.newer('.tmp/assets/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/assets/styles'))
    .pipe(browserSync.reload({stream: true}))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(gulp.dest('src/assets/styles'))
    .pipe(gulp.dest('.tmp/assets/styles'));
});

// Compile and automatically prefix stylesheets for common css base bootstrap
gulp.task('styles:bootstrap', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'src/assets/styles/**/*.scss',
    // 'src/assets/styles/**/*.css'
  ])
    .pipe($.newer('.tmp/assets/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/assets/styles'))
    .pipe(browserSync.reload({stream: true}))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(gulp.dest('src/assets/styles'))
    .pipe(gulp.dest('.tmp/assets/styles'));
});

// Concatenate and minify JavaScript.
gulp.task('scripts', () =>
  gulp.src([
    // Other scripts
    './src/assets/scripts/scrolltrigger.js',
    './src/assets/scripts/bootstrap.bundle.js',
    './src/assets/scripts/slick.min.js',
    './src/assets/scripts/slider.js',
    './src/assets/scripts/plugins.js',
    './src/assets/scripts/scroll.js',
    './src/assets/scripts/jquery.fancybox.js',
    './src/assets/scripts/rwdImageMaps.js',
     './src/assets/scripts/bootstrap.min.js',
    './src/assets/scripts/bootstrap.js',
    './src/assets/scripts/dropdownhover.js',
    // './src/assets/scripts/dropdown.js',

    // './src/assets/scripts/alert.js',
    // './src/assets/scripts/button.js',
    // './src/assets/scripts/collapse.js',
    // './src/assets/scripts/slider.js',
   
    // './src/assets/scripts/tab.js',
    // './src/assets/scripts/scrollspy.js',
    // './src/assets/scripts/modal.js',
    // './src/assets/scripts/press_release.js',
    // Note: Since we are not using useref in the scripts build pipeline,
    //       you need to explicitly list your scripts here in the right order
    //       to be correctly concatenated
    './src/assets/scripts/main.js',
  ])
    // .pipe($.newer('.tmp/assets/scripts'))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/assets/scripts'))
    .pipe($.concat('main.min.js'))
    .pipe($.uglify())
    // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(gulp.dest('src/assets/scripts'))
    .pipe(gulp.dest('.tmp/assets/scripts'))
);

gulp.task('other-scripts', () =>
  gulp.src([
    // Other scripts
    './src/assets/scripts/jquery-1.11.3.min.js',
      // './src/assets/scripts/map.bundle.js',
      './src/assets/scripts/raphael.min.js',
      './src/assets/scripts/map.js'
  ])
  // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/assets/scripts'))
    .pipe(gulp.dest('.tmp/assets/scripts'))
);

// Scan your HTML for assets & optimize them
gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe($.useref({
      searchPath: '{.tmp,src}',
      noAssets: true
    }))

    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
      // removeComments: true,
      // collapseWhitespace: true,
      // collapseBooleanAttributes: true,
      // removeAttributeQuotes: true,
      // removeRedundantAttributes: true,
      // removeEmptyAttributes: true,
      // removeScriptTypeAttributes: true,
      // removeStyleLinkTypeAttributes: true,
      // removeOptionalTags: true
    })))
    // Output files
    .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
    .pipe(gulp.dest('dist'));
});

// Clean output directory
gulp.task('clean', () => del(['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'other-scripts', 'styles', 'styles:bootstrap'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMsrcing: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    // server: ['.tmp', 'src'],
    server: {
      baseDir: ['.tmp', 'src'],
      middleware: [
        connectSSI({
          baseDir: __dirname + '/src',
          ext: '*.html'
        })
      ]
    },
    port: 4000
  });

  gulp.watch(['src/**/*.html'], reload);
  gulp.watch(['src/assets/styles/**/*.{scss, css}'], ['styles', reload]);
  gulp.watch(['src/assets/scripts/**/*.js', '!src/assets/scripts/**/main.min.js'], ['scripts', 'other-scripts', reload]);
  gulp.watch(['src/assets/images/**/*'], reload);
});

gulp.task('serve:css', ['styles'], () => {
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    scrollElementMsrcing: ['main', '.mdl-layout'],
    // server: ['.tmp', 'src'],
    server: {
      baseDir: ['.tmp', 'src'],
      middleware: [
        connectSSI({
          baseDir: __dirname + '/src',
          ext: '.html'
        })
      ]
    },
    port: 4000
  });

  gulp.watch(['src/**/*.html'], reload);
  gulp.watch(['src/assets/styles/**/*.scss'], ['styles:stream']);
});


// Watch files for changes & reload for bootstrap
gulp.task('serve:bootstrap', ['styles:bootstrap'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMsrcing: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'src'],
    port: 4003
  });

  gulp.watch(['src/**/*.html'], reload);
  gulp.watch(['src/assets/styles/**/*.{scss}'], ['styles:bootstrap', reload]);
  // gulp.watch(['src/assets/styles/**/*.{scss,css}'], ['styles:bootstrap', reload]);
  gulp.watch(['src/assets/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], () =>
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMsrcing: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    // server: 'dist',
    server: {
      baseDir: 'dist',
      middleware: [
        connectSSI({
          baseDir: __dirname + '/src',
          ext: '.html'
        })
      ]
    },
    port: 4001
  })
);

// Build production files, the default task
gulp.task('default', ['clean'], cb =>
  runSequence(
    'styles',
    ['html', 'scripts', 'other-scripts', 'images', 'copy', 'fonts'],
    cb
  )
);


// Load custom tasks from the `tasks` directory
// Run: `npm install --save-dev require-dir` from the command-line
// try { require('require-dir')('tasks'); } catch (err) { console.error(err); }
