# Simple Gulp workflow using the AdminPlus Lite Bootstrap Theme
For this example, we are using Gulp as the primary build tool and we get to see how to work with the Sass source files provided with AdminPlus Lite.

### Code
> If you'd rather see the complete code for this guide, clone the [adminplus-boilerplate-gulp](https://github.com/themekit/adminplus-boilerplate-gulp) Github repository. 

### Demo
> You can also [see a working live demo](http://gulp.adminplus-boilerplate.themekit.io) of the project we're builing in this guide.

### Features
- simple [gulp](https://github.com/gulpjs/gulp) workflow
- compile Sass using [gulp-sass](https://github.com/dlmanning/gulp-sass) (gulp wrapper for [node-sass](https://github.com/sass/node-sass))
- import Sass files directly from node_modules using [sass-importer-npm](https://github.com/themekit/sass-importer-npm)
- example of customizing AdminPlus Lite colors

### Advanced boilerplate
Fore more advanced features such as file watchers, minify, browser vendor prefixes, browserify and more, see our [Advanced gulp workflow](docs/gulp-advanced-workflow.md).

---

## Boilerplate usage
> You need to have gulp installed globally. Run `npm install -g gulp`.

#### Clone the boilerplate repository
```bash
git clone \ 
  https://github.com/themekit/adminplus-boilerplate-gulp.git \
  my-project
```

```bash
cd my-project
```

#### Install dependencies
```bash
npm install
```

#### Build
```bash
gulp
```

---

## Project structure
> Our final project structure will look like this:

```
├── dist
│   ├── index.html
│   ├── sidebar.html
│   ├── css
│   │   └── app.css
│   ├── js
│   │   └── app.js
│   └── vendor
│       ├── adminplus.js
│       ├── bootstrap.min.js
│       ├── jquery.min.js
│       └── tether.min.js
├── gulpfile.js
├── package.json
├── node_modules
└── src
    └── sass
        ├── _variables.scss
        └── app.scss
```

## Setup
### Gulp
> Before we go into project specific setup details, make sure you install gulp globally:

```bash
npm install -g gulp
```

## package.json
> Create a package.json file in order to save the project dependencies. Run `npm init` from your project directory.

## Project dependencies
> Install adminplus and it's dependencies (note jQuery and Tether are required by Bootstrap 4):

```bash
npm install --save \
    adminplus@1.0.0-alpha.9 \
    bootstrap-layout@1.0.0-alpha.3 \
    bootstrap@4.0.0-alpha.2 \
    jquery@2 \
    tether
```

### Dev tools
> Install dev dependencies:

```bash
npm install --save-dev \
    gulp \
    gulp-sass \
    sass-importer-npm
```

### gulpfile.js
```js
var gulp = require('gulp');
var sass = require('gulp-sass');
var importer = require('sass-importer-npm');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ importer: importer }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-vendor', function () {
  return gulp.src([
    'adminplus/dist/adminplus.js',
    'bootstrap/dist/js/bootstrap.min.js',
    'jquery/dist/jquery.min.js',
    'tether/dist/js/tether.min.js',
  ], {
    cwd: 'node_modules'
  })
  .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('default', ['copy-vendor', 'sass']);
```

---

## Sass
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
$brand-primary: $deep-purple-400;

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

## Scripts
### dist/js/app.js
> This file will simply initialize the sidebar and scrollbars.

```js
// Initialize Sidebar
AdminPlus.Sidebar.init()

// Initialize Scrollbars
AdminPlus.Scrollable()
```

---

## HTML
> Finally, to complete our simple project, let's create some HTML pages!

### dist/index.html
> Fixed layout:

```html
<!DOCTYPE html>
<html class="bootstrap-layout">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>adminplus-boilerplate-gulp demo</title>

  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Roboto Web Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">

  <!-- App CSS (includes Bootstrap) -->
  <link type="text/css" href="css/app.css" rel="stylesheet">

</head>
<body class="layout-container ls-top-navbar">

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
  <div class="layout-content" data-scrollable>
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
          This is a demo for the <a target="_blank" href="https://github.com/themekit/adminplus-boilerplate-gulp">adminplus-boilerplate-gulp</a> repository. <br>
          Read the full guide <a target="_blank" href="http://adminplus.themekit.io/gulp-simple-workflow">Simple Gulp Workflow using AdminPlus</a>.
        </div>
      </div>

    </div>
  </div>
  <!-- // END Content -->

  <!-- jQuery -->
  <script src="vendor/jquery.min.js"></script>

  <!-- Bootstrap -->
  <script src="vendor/tether.min.js"></script>
  <script src="vendor/bootstrap.min.js"></script>

  <!-- AdminPlus -->
  <script src="vendor/adminplus.js"></script>

  <!-- App -->
  <script src="js/app.js"></script>

</body>
</html>
```

### dist/sidebar.html
> Sidebar layout:

```html
<!DOCTYPE html>
<html class="bootstrap-layout">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>adminplus-boilerplate-gulp demo</title>

  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Roboto Web Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">

  <!-- App CSS (includes Bootstrap) -->
  <link type="text/css" href="css/app.css" rel="stylesheet">

</head>
<body class="layout-container ls-top-navbar si-l3-md-up">

  <!-- Navbar -->
  <nav class="navbar navbar-light bg-white navbar-full navbar-fixed-top ls-left-sidebar">

    <!-- Navbar toggle -->
    <button class="navbar-toggler hidden-md-up pull-xs-right" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

    <!-- Sidebar toggle -->
    <button class="navbar-toggler pull-xs-left" type="button" data-toggle="sidebar" data-target="#sidebar"><span class="material-icons">menu</span></button>

    <!-- Brand -->
    <span class="navbar-brand">Sidebar layout</span>

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
  <div class="sidebar sidebar-left si-si-3 sidebar-visible-md-up sidebar-dark bg-primary" id="sidebar">

    <!-- Brand -->
    <a href="index.html" class="sidebar-brand">Brand</a>

    <!-- Menu -->
    <ul class="sidebar-menu sm-active-button-bg">
      <li class="sidebar-menu-item">
        <a class="sidebar-menu-button" href="index.html"><i class="sidebar-menu-icon material-icons">home</i> Fixed layout</a>
      </li>
      <li class="sidebar-menu-item active">
        <a class="sidebar-menu-button" href="sidebar.html"><i class="sidebar-menu-icon material-icons">menu</i> Sidebar layout</a>
      </li>
    </ul>
    <!-- // END Menu -->

  </div>
  <!-- // END Sidebar -->

  <!-- Content -->
  <div class="layout-content" data-scrollable>
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
          This is a demo for the <a target="_blank" href="https://github.com/themekit/adminplus-boilerplate-gulp">adminplus-boilerplate-gulp</a> repository. <br>
          Read the full guide <a target="_blank" href="http://adminplus.themekit.io/gulp-simple-workflow">Simple Gulp Workflow using AdminPlus</a>.
        </div>
      </div>

    </div>
  </div>
  <!-- // END Content -->

  <!-- jQuery -->
  <script src="vendor/jquery.min.js"></script>

  <!-- Bootstrap -->
  <script src="vendor/tether.min.js"></script>
  <script src="vendor/bootstrap.min.js"></script>

  <!-- AdminPlus -->
  <script src="vendor/adminplus.js"></script>

  <!-- App -->
  <script src="js/app.js"></script>

</body>
</html>
```

---

## Build the project
> The following will create `dist/css/app.css`, `dist/js/app.js` and copy vendor assets from `node_modules` to `dist/vendor`:

```bash
gulp
```