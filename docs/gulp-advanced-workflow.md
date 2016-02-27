# Advanced Gulp workflow using the AdminPlus Lite Bootstrap Theme
For this example, we are using Gulp as the primary build tool and we get to see how to work with the Sass source files provided with AdminPlus Lite, use a module system, setup file watchers and more.

### Code and demo
> If you'd rather see the complete code for this guide or start a blank project using this boilerplate, clone the [adminplus-boilerplate-gulp-advanced](https://github.com/themekit/adminplus-boilerplate-gulp-advanced) Github repository. You can also [see a working live demo](http://gulp-advanced.adminplus-boilerplate.themekit.io) of the boilerplate we're builing in this guide.

### Features
- advanced [gulp](https://github.com/gulpjs/gulp) workflow
- compile Sass using [gulp-sass](https://github.com/dlmanning/gulp-sass) (gulp wrapper for [node-sass](https://github.com/sass/node-sass))
- import Sass files directly from node_modules using [sass-importer-npm](https://github.com/themekit/sass-importer-npm)
- watch Sass files for changes and recompile
- Minify CSS using [gulp-clean-css](https://github.com/scniro/gulp-clean-css) (gulp wrapper for [clean-css](https://github.com/jakubpawlowicz/clean-css))
- Automatically add CSS browser vendor prefixes to support the 2 most recent versions of all major browsers using [PostCSS](https://github.com/postcss/postcss) and [autoprefixer](https://github.com/postcss/autoprefixer)
- generate CSS sourcemaps to enhance log messages when debugging
- leverage [browserify](https://github.com/substack/node-browserify) module system to bundle external vendor scripts and app scripts into a single JavaScript file
- watch JavaScript files for changes and recompile browserify bundles, using [watchify](https://github.com/substack/watchify) for fast incremental rebuilds
- generate sourcemaps for browserify bundles to enhance log messages when debugging
- clean dist assets before (re)builds using [del](https://github.com/sindresorhus/del)
- example of customizing AdminPlus Lite colors

---

## Project structure
> Our final project structure will look like this:

```
├── dist
│   ├── index.html
│   ├── sidebar.html
│   ├── css
│   │   ├── app.min.css
│   │   └── app.min.css.map
│   └── js
│       ├── app.browserify.min.js
│       └── app.browserify.min.js.map
├── gulpfile.js
├── package.json
├── node_modules
└── src
    ├── js
    │   └── app.browserify.js
    └── sass
        ├── _variables.scss
        └── app.scss
```

## package.json
> Create a package.json file in order to save the project dependencies. Run `npm init` from your project directory.

## Development tools
### Gulp
> Make sure you install gulp on your system globally:

```bash
npm install -g gulp
```

### Utilities
> Add gulp as a local dev dependency to your project and install gulp-load-plugins for lazy loading of gulp plugins, gulp-if for conditional pipeline, gulp-rename for renaming files, del for deleting files.

```bash
npm install --save-dev \
    gulp \
    gulp-load-plugins \
    gulp-if \
    gulp-rename \
    del
```

### Sass, CSS auto prefixing, minify CSS, sourcemaps
> Install gulp-sass (a wrapper for node-sass) for compiling Sass files, gulp-postcss (wrapper for PostCSS) for transforming styles with JS plugins, gulp-sourcemaps to generate sourcemap files for easier debugging of Sass (and later JavaScript) files, autoprefixer for automatically adding browser vendor prefixes to our CSS files, gulp-clean-css (wrapper for clean-css) for minifying CSS, sass-importer-npm for resolving Sass imports from the node_modules directory.

```bash
npm install --save-dev \
    gulp-sass \
    gulp-sourcemaps \
    gulp-postcss \
    autoprefixer \
    gulp-clean-css \
    sass-importer-npm
```

### Browserify module system, minify JS
> Install browserify for compiling JS bundles, watchify for fast incremental browserify rebuilds on file changes, vinyl-source-stream to make the browserify bundle stream gulp compatible, vinyl-buffer to buffer file contents, lodash.assign (Object.assign for ES5), pretty-hrtime for logging timestamps, gulp-uglify for minifying JS, globby for reading files from a path using glob patterns.

```bash
npm install --save-dev \
    browserify \
    watchify \
    lodash.assign \
    pretty-hrtime \
    vinyl-buffer \
    vinyl-source-stream \
    gulp-uglify \
    globby
```

---

## gulpfile.js
> Create a gulpfile.js file with the following variables:

```js
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
```

### Options
> Helper variables which will allow us to easily modify the behaviour of our gulp tasks later.

```js
// enable extra debug information, when possible
var __DEBUG = true;
// enable sourcemaps for Browserify bundles and Sass
var __SOURCEMAPS = true;
// clean dist files before (re)builds
var __CLEAN = true;
// minify .css and .js files
var __MINIFY = true;
```

### Source paths
> Source path variables for gulp tasks.

```js
// SOURCE PATH OPTIONS
var __SRC = './src';
var __SRC_BROWSERIFY = [__SRC + '/js/**/**.browserify.js'];
var __SRC_SASS = [
  __SRC + '/sass/**/*.scss',
  // Ignore partials (file names prefixed with _)
  '!' + __SRC + '/sass/**/_*.scss'
];
```

### Destination paths
> Destination path variables.

```js
// DIST PATH OPTIONS
var __DIST = './dist';
var __DIST_JS = __DIST + '/js';
var __DIST_CSS = __DIST + '/css';
```

### Watch paths
> Path variables for gulp watchers.

```js
// WATCH PATHS
var __WATCH_SASS = [__SRC + '/sass/**/**.scss'];
var __WATCH_BROWSERIFY = __SRC_BROWSERIFY;
```

### Clean paths
> Path variables for clean tasks.

```js
// CLEAN PATHS
// clean Browserify bundles
var __CLEAN_BROWSERIFY = [
  // Bundles
  __DIST_JS + '/**/**.browserify.js',
  // Minified bundles
  __DIST_JS + '/**/**.browserify.min.js',
  // .map files
  __DIST_JS + '/**/**.browserify.js.map',
  __DIST_JS + '/**/**.browserify.min.js.map'
];
var __CLEAN_CSS = __DIST_CSS;
```

### Clean tasks
> Delete files from previous builds before rebuilding. Run with `gulp clean-browserify` and `gulp clean-css`.

```js
var del = require('del');

// CLEAN DIST JS BROWSERIFY BUNDLES
gulp.task('clean-browserify', function (cb) {
  if (!__CLEAN) {
    return cb()
  }
  del(__CLEAN_BROWSERIFY).then(function () {
    cb()
  });
});

// CLEAN DIST CSS
gulp.task('clean-css', function (cb) {
  if (!__CLEAN) {
    return cb()
  }
  del(__CLEAN_CSS).then(function () {
    cb()
  });
});
```

### Watch mode
> The following task will be called before running any watcher and sets a global `__WATCHING` flag to let other tasks know we're in watch mode.

```js
gulp.task('watch:set', function (cb) {
  global.__WATCHING = true
  cb()
});
```

### Compile Sass task
> Compile Sass, autoprefix CSS, minify CSS, generate sourcemaps. Run with `gulp sass`.

```js
gulp.task('sass', ['clean-css'], function () {
  return gulp.src(__SRC_SASS)
    // (optional) sourcemaps
    .pipe($.if(__SOURCEMAPS, $.sourcemaps.init()))
    // Compile Sass
    .pipe($.sass({ 
      // Resolve Sass file imports from node_modules
      importer: require('sass-importer-npm') 
    })
    // Handle errors
    .on('error', $.sass.logError))
    // Post CSS
    .pipe($.postcss([
      // autoprefixer
      require('autoprefixer')({ browsers: ['last 2 versions'] })
    ]))
    // (optional) Minify CSS
    .pipe($.if(__MINIFY, $.rename({ extname: '.min.css' })))
    .pipe($.if(__MINIFY, $.cleanCss()))
    // (optional) Write .map file
    .pipe($.if(__SOURCEMAPS, $.sourcemaps.write('./')))
    // Write CSS file
    .pipe(gulp.dest(__DIST_CSS))
});
```

### Watch Sass task
> Watch Sass source files and recompile on file changes. Run with `gulp sass:watch`.

```js
gulp.task('sass:watch', ['watch:set'], function () {
  gulp.watch(__WATCH_SASS, ['sass']);
});
```

### Browserify dependencies

```js
// BROWSERIFY DEPENDENCIES
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var globby = require('globby');
var path = require('path');
var assign = require('lodash.assign');
```

### Browserify logging helper
> Provide logs for browserify bundlers.

```js
var prettyHrtime = require('pretty-hrtime');
var _startTime;
var bundleLogger = {
  start: function (filepath) {
    _startTime = process.hrtime();
    $.util.log('Bundling', $.util.colors.green(filepath) + '...');
  },
  end: function (filepath) {
    var taskTime = process.hrtime(_startTime);
    var prettyTime = prettyHrtime(taskTime);
    $.util.log('Bundled', $.util.colors.green(filepath), 'in', $.util.colors.magenta(prettyTime));
  }
}
```

### Compile Browserify bundles task
> Compile Browserify, minify JS, generate sourcemaps, wrap with watchify when using watch mode for fast incremental rebuilds. Run with `gulp browserify`.

```js
gulp.task('browserify', ['clean-browserify'], function (callback) {
  globby(__SRC_BROWSERIFY).then(function (bundles) {
    
    var bundleQueue = bundles.length;
    bundles = bundles.map(function (bundle) {
      return {
        src: bundle,
        dest: __DIST_JS,
        bundleName: path.basename(bundle)
      }
    });

    var browserifyThis = function (bundleConfig) {
      var opts = assign({}, watchify.args, {
        // Specify the entry point of your app
        entries: bundleConfig.src,
        // Enable source maps!
        debug: __DEBUG,
        paths: [
          // Resolve files from node_modules
          path.resolve(__dirname, 'node_modules')
        ]
      });
      var bundler = browserify(opts);

      var bundle = function () {
        // Log when bundling starts
        bundleLogger.start(path.join(bundleConfig.dest, bundleConfig.bundleName));

        return bundler
          .bundle()
          // Report compile errors
          .on('error', $.util.log)
          // Use vinyl-source-stream to make the
          // stream gulp compatible. Specifiy the
          // desired output filename here.
          .pipe(source(bundleConfig.bundleName))
          // buffer file contents
          .pipe(buffer())
          // (optional) sourcemaps
          // loads map from browserify file
          .pipe($.if(__SOURCEMAPS, $.sourcemaps.init({ loadMaps: true })))
          // Add transformation tasks to the pipeline here.
          // (optional) Minify CSS
          .pipe($.if(__MINIFY, $.rename({ extname: '.min.js' })))
          .pipe($.if(__MINIFY, $.uglify()))
          // (optional) Write .map file
          .pipe($.if(__SOURCEMAPS, $.sourcemaps.write('./')))
          // Write JS file
          .pipe(gulp.dest(bundleConfig.dest))
          .on('end', reportFinished)
      };

      if (global.__WATCHING) {
        // Wrap with watchify and rebundle on changes
        bundler = watchify(bundler);
        // Rebundle on update
        bundler.on('update', bundle);
      }

      var reportFinished = function () {
        // Log when bundling completes
        bundleLogger.end(path.join(bundleConfig.dest, bundleConfig.bundleName));

        if (bundleQueue) {
          bundleQueue --;
          if (bundleQueue === 0) {
            // If queue is empty, tell gulp the task is complete.
            // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
            callback();
          }
        }
      };

      return bundle();
    };

    // Start bundling source files with Browserify
    bundles.forEach(browserifyThis);
  });
});
```

### Watch Browserify bundles
> Watch Browserify source files and recompile on file changes.

```js
gulp.task('browserify:watch', ['watch:set'], function () {
  gulp.watch(__WATCH_BROWSERIFY, ['browserify']);
});
```

### Watch task
> Enable all watcher tasks. Run with `gulp watch`.

```js
gulp.task('watch', ['sass:watch', 'browserify:watch']);
```

### Default task
> The default task defines what will be executed when running `gulp` without specifying a task name.

```js
gulp.task('default', ['sass', 'browserify']);
```

---

## Project assets
> Install adminplus and bootstrap (note jQuery and Tether are required by Bootstrap 4):

```bash
npm install --save \
    adminplus \
    bootstrap@4.0.0-alpha.2 \
    jquery@2 \
    tether
```

### Sass color variables
> For the purpose of customizing the colors, let's install `sass-md-colors`, a handy package which provides the Material Design Color Palette as Sass variables.

```bash
npm install --save \
    sass-md-colors
```

### src/sass/_variables.scss
```sass
// Color variables
@import 'sass-md-colors/colors/variables';

// Customize any variables here, before loading the default variables
$brand-primary: $red-400;

// Default style
@import 'adminplus/src/sass/variables';
```

## Customizing colors
> The following example will load both the default and custom variables from `src/sass/_variables.scss` and the default style from `adminplus/src/sass/style.scss`.

### src/sass/app.scss
```sass
// Variables (default and custom)
@import './variables';

// Default AdminPlus Lite style (including Bootstrap)
@import 'adminplus/src/sass/style';
```

---

## JavaScript bundle
### src/js/app.browserify.js

```js
// Vendor libraries
// jQuery
window.$ = window.jQuery = require('jquery');

// Tether (required by Bootstrap 4)
window.Tether = require('tether');

// Bootstrap 4
require('bootstrap');

// AdminPlus Lite
var AdminPlus = require('adminplus');

// Initialize Sidebars
AdminPlus.Sidebar.init();
```

---

## HTML
> Finally, to complete our simple project, let's create some HTML pages!

### dist/index.html
> Fixed layout:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>adminplus-boilerplate-gulp-advanced demo</title>

  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Roboto Web Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">

  <!-- App CSS (includes Bootstrap) -->
  <link type="text/css" href="css/app.min.css" rel="stylesheet">

</head>
<body class="ls-top-navbar">

  <!-- Navbar -->
  <nav class="navbar navbar-dark bg-primary navbar-full navbar-fixed-top">
    <div class="container">

      <!-- Navbar toggle -->
      <button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

      <!-- Brand -->
      <a class="navbar-brand" href="index.html">Brand</a>

      <!-- Collapse -->
      <div class="collapse navbar-toggleable-xs" id="navbar">
        <ul class="nav navbar-nav">
          <li class="nav-item active"><a class="nav-link" href="index.html">Fixed</a></li>
          <li class="nav-item"><a class="nav-link" href="sidebar.html">Sidebar</a></li>
        </ul>
      </div>
      <!-- // END Collapse -->
    </div>
  </nav>
  <!-- // END Navbar -->

  <!-- Content -->
  <div class="container">

    <!-- Breadcrumb -->
    <ol class="breadcrumb">
      <li><a href="index.html">AdminPlus</a></li>
      <li class="active">Fixed layout</li>
    </ol>
    <!-- // END Breadcrumb -->

    <h1>Hello World</h1>
    
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea ullam iusto asperiores repellat perspiciatis error. Quo praesentium, expedita neque natus quisquam iure consequuntur unde hic doloribus ab voluptas pariatur!</p>

    <div class="card">
      <div class="card-block">
        This is a demo for the <a target="_blank" href="https://github.com/themekit/adminplus-boilerplate-gulp-advanced">adminplus-boilerplate-gulp-advanced</a> repository. <br>
        Read the full guide <a target="_blank" href="http://adminplus.themekit.io/gulp-advanced-workflow">Advanced gulp workflow</a>.
      </div>
    </div>

  </div>
  <!-- // END Content -->

  <!-- App JS (includes vendor assets) -->
  <script src="js/app.browserify.min.js"></script>

</body>
</html>
```

### dist/sidebar.html
> Sidebar layout:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>adminplus-boilerplate-gulp-advanced demo</title>

  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Roboto Web Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">

  <!-- App CSS (includes Bootstrap) -->
  <link type="text/css" href="css/app.min.css" rel="stylesheet">

</head>
<body class="ls-top-navbar">

  <!-- Navbar -->
  <nav class="navbar navbar-light bg-white navbar-full navbar-fixed-top left-md-sidebar">

    <!-- Navbar toggle -->
    <button class="navbar-toggler hidden-md-up pull-xs-right" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

    <!-- Sidebar toggle -->
      <button class="navbar-toggler pull-xs-left hidden-md-up first-child-xs" type="button" data-toggle="sidebar" data-target="#sidebar"><span class="material-icons">menu</span></button>

    <!-- Brand -->
    <span class="navbar-brand first-child-md">Sidebar layout</span>

    <!-- Collapse -->
    <div class="collapse navbar-toggleable-xs" id="navbar">
      <ul class="nav navbar-nav">
        <li class="nav-item"><a class="nav-link" href="index.html">Fixed</a></li>
        <li class="nav-item active"><a class="nav-link" href="sidebar.html">Sidebar</a></li>
      </ul>
    </div>
    <!-- // END Collapse -->
  </nav>
  <!-- // END Navbar -->

  <!-- Sidebar -->
  <div class="sidebar sidebar-left sidebar-dark bg-primary show-desktop" id="sidebar">

    <!-- Brand -->
    <a href="index.html" class="sidebar-brand">Brand</a>

    <!-- Menu -->
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html"><i class="material-icons">home</i><span class="icon-text">Fixed layout</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="sidebar.html"><i class="material-icons">menu</i><span class="icon-text">Sidebar layout</span></a>
      </li>
    </ul>
    <!-- // END Menu -->

  </div>
  <!-- // END Sidebar -->

  <!-- Content -->
  <div class="content-wrapper">
    <div class="container-fluid">

      <!-- Breadcrumb -->
      <ol class="breadcrumb">
        <li><a href="index.html">AdminPlus</a></li>
        <li class="active">Sidebar layout</li>
      </ol>
      <!-- // END Breadcrumb -->

      <h1>Hello World</h1>
      
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea ullam iusto asperiores repellat perspiciatis error. Quo praesentium, expedita neque natus quisquam iure consequuntur unde hic doloribus ab voluptas pariatur!</p>

      <div class="card">
        <div class="card-block">
          This is a demo for the <a target="_blank" href="https://github.com/themekit/adminplus-boilerplate-gulp-advanced">adminplus-boilerplate-gulp-advanced</a> repository. <br>
          Read the full guide <a target="_blank" href="http://adminplus.themekit.io/gulp-advanced-workflow">Advanced gulp workflow</a>.
        </div>
      </div>

    </div>
  </div>
  <!-- // END Content -->

  <!-- App JS (includes vendor assets) -->
  <script src="js/app.browserify.min.js"></script>

</body>
</html>
```

---

## Build project assets
> The following will create `dist/css/app.min.css` and `dist/js/app.browserify.min.js`:

```bash
gulp
```