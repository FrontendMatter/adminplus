# Basic usage (npm)
The most simple npm setup and minimal boilerplate to get started with AdminPlus Lite. For this example, we're not going to use any build tools.

### Code and demo
> If you'd rather see the complete code for this guide, clone the [adminplus-boilerplate-npm](https://github.com/themekit/adminplus-boilerplate-npm) Github repository. You can also [see a working live demo](http://npm.adminplus-boilerplate.themekit.io) of the files we're creating in this guide.

### Features
- simple npm setup
- no build tools
- static HTML layout examples

---

## Project structure
> Our final project structure will look like this:

```
├── index.html
├── sidebar.html
├── package.json
├── node_modules
└── vendor
    ├── adminplus.css
    ├── adminplus.js
    ├── bootstrap.min.js
    ├── jquery.min.js
    └── tether.min.js
```

## Setup
### package.json
> Assuming you're working from a new project (empty) directory, you'll need to create a package.json file. To create a package.json file using npm, run `npm init`.

### Install dependencies
> Install adminplus and it's dependencies (note jQuery and Tether are required by Bootstrap 4):

```bash
npm install --save \
  	adminplus \
  	bootstrap@4.0.0-alpha.2 \
  	jquery@2 \
  	tether
```

### Dev tools
> Install dev dependencies:

```bash
npm install --save-dev \
    copyfiles
```

### Update package.json
> Within the `scripts` section of your package.json file, add the following `copy-vendor` entry:

```js
{
  "scripts": {
    "copy-vendor": "copyfiles -f node_modules/adminplus/dist/* node_modules/bootstrap/dist/js/bootstrap.min.js node_modules/jquery/dist/jquery.min.js node_modules/tether/dist/js/tether.min.js vendor"
  }
}
```

### Copy assets
> Using the `copy-vendor` npm script we just created, let's copy the required assets from `node_modules` into the `vendor` directory. Run:

```bash
npm run copy-vendor
```

---

## HTML
> Finally, to complete our simple project, let's create some HTML pages!

### index.html
> Fixed layout:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>adminplus-boilerplate-npm demo</title>

  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Roboto Web Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">

  <!-- AdminPlus Lite CSS (includes Bootstrap) -->
  <link type="text/css" href="vendor/adminplus.css" rel="stylesheet">

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
        This is a demo for the <a target="_blank" href="https://github.com/themekit/adminplus-boilerplate-npm">adminplus-boilerplate-npm</a> repository. <br>
        Read the full guide <a target="_blank" href="http://adminplus.themekit.io/basic-usage">Simple npm workflow</a>.
      </div>
    </div>

  </div>
  <!-- // END Content -->

  <!-- jQuery -->
  <script src="vendor/jquery.min.js"></script>

  <!-- Bootstrap -->
  <script src="vendor/tether.min.js"></script>
  <script src="vendor/bootstrap.min.js"></script>

</body>
</html>
```

### sidebar.html
> Sidebar layout:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>adminplus-boilerplate-npm demo</title>

  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Roboto Web Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">

  <!-- AdminPlus Lite CSS (includes Bootstrap) -->
  <link type="text/css" href="vendor/adminplus.css" rel="stylesheet">

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
          This is a demo for the <a target="_blank" href="https://github.com/themekit/adminplus-boilerplate-npm">adminplus-boilerplate-npm</a> repository. <br>
          Read the full guide <a target="_blank" href="http://adminplus.themekit.io/basic-usage">Simple npm workflow</a>.
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

  <!-- Initialize Sidebar -->
  <script>
    AdminPlus.Sidebar.init()
  </script>

</body>
</html>
```