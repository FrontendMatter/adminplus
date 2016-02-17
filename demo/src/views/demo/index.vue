<template>

	<!-- Navbar -->
	<nav class="navbar navbar-light bg-white navbar-full navbar-fixed-top left-md-sidebar">
		<div class="container">
			<button class="navbar-toggler pull-xs-left hidden-md-up" type="button" data-toggle="sidebar" data-target="#sidebar">
				<span class="material-icons">menu</span>
			</button>
			<a href="index.html" class="navbar-brand">Components</a>
			<ul class="nav navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#/">Docs</a>
				</li>
			</ul>
		</div>
	</nav>
	<!-- // END Navbar -->

	<!-- Sidebar -->
	<div class="sidebar sidebar-left sidebar-dark bg-primary show-desktop" id="sidebar">
		<a href="#" class="sidebar-brand">AdminPlus Lite</a>
		<div class="sidebar-header">Components</div>
		<ul class="nav components-nav">
			<li class="nav-item open">
				<a href="#button" class="nav-link">Button</a>
				<ul>
					<li><a href="#button">Button style</a></li>
					<li><a href="#button-group">Button group</a></li>
					<li><a href="#button-dropdown">Button dropdown</a></li>
				</ul>
			</li>
			<li class="nav-item"><a href="#forms" class="nav-link">Forms</a></li>
			<li class="nav-item"><a href="#input-group" class="nav-link">Input group</a></li>
			<li class="nav-item"><a href="#dropdown" class="nav-link">Dropdown</a></li>
			<li class="nav-item"><a href="#jumbotron" class="nav-link">Jumbotron</a></li>
			<li class="nav-item"><a href="#label" class="nav-link">Label</a></li>
			<li class="nav-item"><a href="#alert" class="nav-link">Alert</a></li>
			<li class="nav-item"><a href="#card" class="nav-link">Card</a></li>
		</ul>
	</div>

	<!-- Content -->
	<div class="content-wrapper">
		<div class="container-fluid m-t-1">

			<div class="page-heading center" id="button">
				<h2>Button</h2>
				<p class="lead">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</p>
			</div>

			<div class="card" id="button-style">
				<div class="card-header">
					<h4 class="card-title">Button style</h4>
				</div>
				<div class="card-block">
					
					<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
					<button type="button" class="btn btn-white">White</button>
					<button type="button" class="btn btn-primary">Primary</button>

					<!-- Secondary, outline button -->
					<button type="button" class="btn btn-secondary">Secondary</button>

					<!-- Indicates a successful or positive action -->
					<button type="button" class="btn btn-success">Success</button>

					<!-- Contextual button for informational alert messages -->
					<button type="button" class="btn btn-info">Info</button>

					<!-- Indicates caution should be taken with this action -->
					<button type="button" class="btn btn-warning">Warning</button>

					<!-- Indicates a dangerous or potentially negative action -->
					<button type="button" class="btn btn-danger">Danger</button>

					<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
					<button type="button" class="btn btn-link">Link</button>
					
					<hr>

						<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
					<button type="button" class="btn btn-white btn-rounded">White</button>
					<button type="button" class="btn btn-primary btn-rounded">Primary</button>

					<!-- Secondary, outline button -->
					<button type="button" class="btn btn-secondary btn-rounded">Secondary</button>

					<!-- Indicates a successful or positive action -->
					<button type="button" class="btn btn-success btn-rounded">Success</button>

					<!-- Contextual button for informational alert messages -->
					<button type="button" class="btn btn-info btn-rounded">Info</button>

					<!-- Indicates caution should be taken with this action -->
					<button type="button" class="btn btn-warning btn-rounded">Warning</button>

					<!-- Indicates a dangerous or potentially negative action -->
					<button type="button" class="btn btn-danger btn-rounded">Danger</button>

					<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
					
					<hr>
					<button type="button" class="btn btn-primary-outline">Primary</button>
					<button type="button" class="btn btn-secondary-outline">Secondary</button>
					<button type="button" class="btn btn-success-outline">Success</button>
					<button type="button" class="btn btn-info-outline">Info</button>
					<button type="button" class="btn btn-warning-outline">Warning</button>
					<button type="button" class="btn btn-danger-outline">Danger</button>		
				</div>
			</div>

			<div class="card" id="button-group">
				<div class="card-header">
					<h4 class="card-title">Button group</h4>
				</div>
				<div class="card-block">
					<div class="btn-group" role="group" aria-label="Basic example">
					  <button type="button" class="btn btn-default">Left</button>
					  <button type="button" class="btn btn-default">Middle</button>
					  <button type="button" class="btn btn-default">Right</button>
					</div>
					<hr>
					<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
						<button type="button" class="btn btn-white">Button</button>
						<button type="button" class="btn btn-white">Button</button>
						<button type="button" class="btn btn-white">Button</button>
						<button type="button" class="btn btn-white">Button</button>
					  </div>
				</div>
			</div>
			
			<div class="card" id="button-dropdown">
				<div class="card-header">
					<h4 class="card-title">Button dropdown</h4>
				</div>
				<div class="card-block">
					
					  <div class="btn-group">
						<button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Default</button>
						<div class="dropdown-menu">
						  <a class="dropdown-item" href="#">Action</a>
						  <a class="dropdown-item" href="#">Another action</a>
						  <a class="dropdown-item" href="#">Something else here</a>
						  <div class="dropdown-divider"></div>
						  <a class="dropdown-item" href="#">Separated link</a>
						</div>
					  </div><!-- /btn-group -->
					  <div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
						<div class="dropdown-menu">
						  <a class="dropdown-item" href="#">Action</a>
						  <a class="dropdown-item" href="#">Another action</a>
						  <a class="dropdown-item" href="#">Something else here</a>
						  <div class="dropdown-divider"></div>
						  <a class="dropdown-item" href="#">Separated link</a>
						</div>
					  </div><!-- /btn-group -->
					  <div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
						<div class="dropdown-menu">
						  <a class="dropdown-item" href="#">Action</a>
						  <a class="dropdown-item" href="#">Another action</a>
						  <a class="dropdown-item" href="#">Something else here</a>
						  <div class="dropdown-divider"></div>
						  <a class="dropdown-item" href="#">Separated link</a>
						</div>
					  </div><!-- /btn-group -->
					  <div class="btn-group">
						<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
						<div class="dropdown-menu">
						  <a class="dropdown-item" href="#">Action</a>
						  <a class="dropdown-item" href="#">Another action</a>
						  <a class="dropdown-item" href="#">Something else here</a>
						  <div class="dropdown-divider"></div>
						  <a class="dropdown-item" href="#">Separated link</a>
						</div>
					  </div><!-- /btn-group -->
					  <div class="btn-group">
						<button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
						<div class="dropdown-menu">
						  <a class="dropdown-item" href="#">Action</a>
						  <a class="dropdown-item" href="#">Another action</a>
						  <a class="dropdown-item" href="#">Something else here</a>
						  <div class="dropdown-divider"></div>
						  <a class="dropdown-item" href="#">Separated link</a>
						</div>
					  </div><!-- /btn-group -->
					  <div class="btn-group">
						<button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
						<div class="dropdown-menu">
						  <a class="dropdown-item" href="#">Action</a>
						  <a class="dropdown-item" href="#">Another action</a>
						  <a class="dropdown-item" href="#">Something else here</a>
						  <div class="dropdown-divider"></div>
						  <a class="dropdown-item" href="#">Separated link</a>
						</div>
					  </div><!-- /btn-group -->
					
				</div>
			</div>

			<div class="page-heading center" id="forms">
				<h2>Forms</h2>
				<p class="lead">Bootstrap provides several form control styles, layout options, and custom components for creating a wide variety of forms.</p>
			</div>

			<div class="card" id="forms">
				<div class="card-header">
					<h4 class="card-title">Forms</h4>
				</div>
				<div class="card-block">
					<form>
					  <fieldset class="form-group">
						<label for="exampleInputEmail1">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
						<small class="text-muted">We'll never share your email with anyone else.</small>
					  </fieldset>
					  <fieldset class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
					  </fieldset>
					  <fieldset class="form-group">
						<label for="exampleSelect1">Example select</label>
						<select class="form-control" id="exampleSelect1">
						  <option>1</option>
						  <option>2</option>
						  <option>3</option>
						  <option>4</option>
						  <option>5</option>
						</select>
					  </fieldset>
					  <fieldset class="form-group">
						<label for="exampleSelect2">Example multiple select</label>
						<select multiple class="form-control" id="exampleSelect2">
						  <option>1</option>
						  <option>2</option>
						  <option>3</option>
						  <option>4</option>
						  <option>5</option>
						</select>
					  </fieldset>
					  <fieldset class="form-group">
						<label for="exampleTextarea">Example textarea</label>
						<textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
					  </fieldset>
					  <fieldset class="form-group">
						<label for="exampleInputFile">File input</label>
						<input type="file" class="form-control-file" id="exampleInputFile">
						<small class="text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
					  </fieldset>
					  <div class="radio">
						<label>
						  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
						  Option one is this and that&mdash;be sure to include why it's great
						</label>
					  </div>
					  <div class="radio">
						<label>
						  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
						  Option two can be something else and selecting it will deselect option one
						</label>
					  </div>
					  <div class="radio disabled">
						<label>
						  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
						  Option three is disabled
						</label>
					  </div>
					  <div class="checkbox">
						<label>
						  <input type="checkbox"> Check me out
						</label>
					  </div>
					  <button type="submit" class="btn btn-primary">Submit</button>
					</form>
					<hr>
					 <!-- Custom Forms -->
					<label class="c-input c-checkbox">
					  <input type="checkbox">
					  <span class="c-indicator"></span>
					  Check this custom checkbox
					</label>
					<hr>
					<div class="c-inputs-stacked">
					  <label class="c-input c-radio">
						<input id="radioStacked1" name="radio-stacked" type="radio">
						<span class="c-indicator"></span>
						Toggle this custom radio
					  </label>
					  <label class="c-input c-radio">
						<input id="radioStacked2" name="radio-stacked" type="radio">
						<span class="c-indicator"></span>
						Or toggle this other custom radio
					  </label>
					</div>
					<hr>
					<select class="c-select">
					  <option selected>Open this select menu</option>
					  <option value="1">One</option>
					  <option value="2">Two</option>
					  <option value="3">Three</option>
					</select>
					<hr>
					<label class="file">
					  <input type="file" id="file">
					  <span class="file-custom"></span>
					</label>
				</div>
			</div>

			<div class="page-heading center" id="input-group">
				<h2>Input group</h2>
				<p class="lead">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.</p>
			</div>

			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Input group</h4>
				</div>
				<div class="card-block">
					<div class="input-group">
						<span class="input-group-addon" id="basic-addon1">@</span>
						<input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
					</div>
					<br>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
						<span class="input-group-addon" id="basic-addon2">@example.com</span>
					</div>
					<br>
						<label for="basic-url">Your vanity URL</label>
						<div class="input-group">
						<span class="input-group-addon" id="basic-addon3">https://example.com/users/</span>
						<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
					</div>
					<br>
					<div class="input-group">
						<span class="input-group-addon">$</span>
						<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
						<span class="input-group-addon">.00</span>
					</div>

					<hr>
					<!-- Button Dropdowns -->
					<div class="row">
					  <div class="col-lg-6">
						<div class="input-group">
						  <span class="input-group-btn">
							<button class="btn btn-default" type="button">Go!</button>
						  </span>
						  <input type="text" class="form-control" placeholder="Search for...">
						</div>
					  </div>
					  <div class="col-lg-6">
						<div class="input-group">
						  <input type="text" class="form-control" placeholder="Search for...">
						  <span class="input-group-btn">
							<button class="btn btn-default" type="button">Go!</button>
						  </span>
						</div>
					  </div>
					</div>
					<br>
					<div class="row">
					  <div class="col-lg-offset-3 col-lg-6">
						<div class="input-group">
						  <span class="input-group-btn">
							<button class="btn btn-default" type="button">Hate it</button>
						  </span>
						  <input type="text" class="form-control" placeholder="Product name">
						  <span class="input-group-btn">
							<button class="btn btn-default" type="button">Love it</button>
						  </span>
						</div>
					  </div>
					</div>
				</div>
			</div>

			<div class="page-heading center" id="dropdown">
				<h2>Dropdown</h2>
				<p class="lead">Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin.</p>
			</div>

			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Dropdown</h4>
				</div>
				<div class="card-block">
					<div class="dropdown">
						<button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Dropdown
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenu1">
							<h6 class="dropdown-header">Dropdown header</h6>
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<a class="dropdown-item disabled" href="#">Disabled link</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</div>
				</div>
			</div>

			<div class="page-heading center" id="jumbotron">
				<h2>Jumbotron</h2>
				<p class="lead">A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.</p>
			</div>

			<div class="jumbotron">
				<h1 class="display-4">Hello world!</h1>
				<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
				<hr>
				<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
				<p class="lead"><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
			</div>

			<div class="page-heading center" id="label">
				<h2>Label</h2>
				<p class="lead">Small and adaptive tag for adding context to just about any content.</p>
			</div>
			
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Label</h4>
				</div>
				<div class="card-block">
					<span class="label label-default">Default</span>
					<span class="label label-primary">Primary</span>
					<span class="label label-success">Success</span>
					<span class="label label-info">Info</span>
					<span class="label label-warning">Warning</span>
					<span class="label label-danger">Danger</span>
					<hr>
					<span class="label label-pill label-default">Default</span>
					<span class="label label-pill label-primary">Primary</span>
					<span class="label label-pill label-success">Success</span>
					<span class="label label-pill label-info">Info</span>
					<span class="label label-pill label-warning">Warning</span>
					<span class="label label-pill label-danger">Danger</span>
				</div>
			</div>

			<div class="page-heading center" id="alert">
				<h2>Alert</h2>
				<p class="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
			</div>

			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Alerts</h4>
				</div>
				<div class="card-block">
					<div class="alert alert-success" role="alert">
					  <strong>Well done!</strong> You successfully read this important alert message.
					</div>
					<div class="alert alert-info" role="alert">
					  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
					</div>
					<div class="alert alert-warning" role="alert">
					  <strong>Warning!</strong> Better check yourself, you're not looking too good.
					</div>
					<div class="alert alert-danger" role="alert">
					  <strong>Oh snap!</strong> Change a few things up and try submitting again.
					</div>
					<hr>
					<div class="alert alert-warning alert-dismissible fade in" role="alert">
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
						<strong>Holy guacamole!</strong> You should check in on some of those fields below.
					</div>
				</div>
			</div>

			<div class="page-heading center" id="card">
				<h2>Card</h2>
				<p class="lead">A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
			</div>

			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Card Header Title</h4>
				</div>
				<div class="card-block">
					<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
				<div class="card-footer text-muted">
					Card Footer
				</div>
			</div>

			<div class="card">
				<div class="card-block">
					<h4 class="card-title">Card title in block</h4>
					<p class="card-subtitle">Subtitle for title</p>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Button</a>
				</div>
			</div>

			<div class="card">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Cras justo odio</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>

			<div class="row">
				<div class="col-sm-6">
					<div class="card card-block">
						<h3 class="card-title">Special title treatment</h3>
						<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="card card-block">
						<h3 class="card-title">Special title treatment</h3>
						<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Navs</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Navbar</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Sidebar</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Breadcrumb</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Pagination</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Progress</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">List Group</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Modal</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Scrollspy</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Tooltips</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Popovers</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Collapse</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Carousel</h4>
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">Utilities</h4>
				</div>
			</div>

		</div>
		<!-- // END .container-fluid -->

	</div>
	<!-- // END .content-wrapper -->

</template>

<script>
	import { Sidebar } from 'adminplus'
	export default {
		created () {
			document.title = 'Demo | AdminPlus Lite'
		},
		ready () {
			Sidebar.init()
			$('body').scrollspy({ target: '#sidebar', offset: 74 })
			$('.components-nav a').on('click', (e) => {
				e.preventDefault()
				const target = $(e.currentTarget).attr('href')
				if (target && target !== '#') {
					const targetElement = document.querySelector(target)
					$('body').animate({
						scrollTop: targetElement.offsetTop
					})
				}
			})
		},
		beforeDestroy () {
			$('body').off()
		}
	}
</script>