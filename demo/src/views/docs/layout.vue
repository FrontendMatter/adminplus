<template>
	<!-- Navbar -->
	<nav class="navbar navbar-dark bg-primary navbar-full navbar-fixed-top">
		<div class="container">

			<!-- Brand -->
			<a class="navbar-brand" v-link="{ name: 'docs.home' }">AdminPlus Lite</a>

			<!-- Toggle navbar -->
			<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="true"><span class="material-icons">menu</span></button>

			<!-- Collapse -->
	  		<div class="collapse navbar-toggleable-xs" id="navbarMenu">
				<ul class="nav navbar-nav">
					<li class="nav-item" v-link-active>
						<a class="nav-link" v-link="{ name: 'docs.home' }">Introduction</a>
					</li>
					<li class="nav-item dropdown" v-link-active>
						<a class="nav-link dropdown-toggle" data-toggle="dropdown">Usage</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" v-link="{ name: 'docs.page', params: { page: 'basic-usage' } }">Basic usage (npm)</a></li>
							<li><a class="dropdown-item" v-link="{ name: 'docs.page', params: { page: 'gulp-simple-workflow' } }">Simple gulp workflow</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link" v-link="{ name: 'demo' }">Demo</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- // END Navbar -->

	<div class="container-fluid main-container">
		<router-view></router-view>
	</div>
</template>