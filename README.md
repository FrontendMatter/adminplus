# AdminPlus - Bootstrap 4 Admin Template

## Basic usage
> From any project, install adminplus and it's dependencies via npm:

```bash
npm install --save \
	adminplus \
	bootstrap@4.0.0-alpha.2 \
	jquery@2 \
	tether
```

### index.html
> Simple HTML boilerplate:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>AdminPlus</title>

  <!-- AdminPlus CSS (includes Bootstrap) -->
  <link type="text/css" href="node_modules/adminplus/dist/adminplus.css" rel="stylesheet">

  <!-- jQuery -->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>
  
</head>
<body>

  <!-- Bootstrap 4 JS -->
  <script src="node_modules/tether/dist/js/tether.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

  <!-- AdminPlus -->
  <script src="node_modules/adminplus/dist/adminplus.js"></script>

  <!-- App JS -->
  <script src="main.js"></script>

</body>
</html>
```

### main.js
> Simple JavaScript boilerplate:

```js
// Initialize AdminPlus Sidebars
AdminPlus.Sidebar.init()
```

--


## Run locally

### Install dependencies

> The adminplus package does not include any vendor libraries. To install all the dependencies, run: 

```bash
npm install
```

## Build
> You can easily build adminplus yourself. Our build tool of choice is webpack and any of the following commands will create the files `dist/adminplus.js` and `dist/adminplus.css`

### Install dev dependencies
> Before you can build adminplus, make sure webpack is installed globally:

```bash
npm install -g webpack
```

### Production build

Includes minification and several optimizations:

```bash
npm run build
```

### Development build

A faster build suited for development, with no optimizations and without minification:

```bash
npm run build-dev
```
	
### Watch

Start an initial development build and then FAST continuous incremental builds:

```bash
npm run dev
```