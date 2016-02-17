# Basic usage
The most simple setup and minimal boilerplate to get started with AdminPlus Lite. For this example, we're not even going to use any build tools.

## Setup
> Install adminplus and it's dependencies via npm:

```bash
npm install --save \
	adminplus \
	bootstrap@4.0.0-alpha.2 \
	jquery@2 \
	tether
```

## App structure
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

  <!-- Material Design Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Roboto Web Font -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet">

  <!-- AdminPlus CSS (includes Bootstrap) -->
  <link type="text/css" href="node_modules/adminplus/dist/adminplus.css" rel="stylesheet">
  
</head>
<body>

  <!-- jQuery -->
  <script src="node_modules/jquery/dist/jquery.min.js"></script>

  <!-- Bootstrap -->
  <script src="node_modules/tether/dist/js/tether.min.js"></script>
  <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

  <!-- AdminPlus -->
  <script src="node_modules/adminplus/dist/adminplus.js"></script>

  <!-- App -->
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