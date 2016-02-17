<template>
	<!-- Navbar -->
	<nav class="navbar navbar-dark bg-primary navbar-full navbar-fixed-top">
		<div class="container">
			<a class="navbar-brand m-r-2" href="#">AdminPlus Lite</a>
			<button class="navbar-toggler hidden-md-up pull-xs-right" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-expanded="true">
            	<span class="material-icons">menu</span>
        	</button>
	  		<div class="collapse navbar-toggleable-xs" id="navbarMenu">
				<ul class="nav navbar-nav">
					<li class="nav-item" v-link-active>
						<a class="nav-link" v-link="{ name: 'docs.home' }">Introduction</a>
					</li>
					<li class="nav-item dropdown" v-link-active>
						<a class="nav-link dropdown-toggle" data-toggle="dropdown">Usage</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" v-link="{ name: 'docs.page', params: { page: 'basic-usage' } }">Basic Usage</a></li>
						</ul>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#demo">Demo</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- // END Navbar -->

	<div class="container-fluid main-container">
		<div class="content-wrapper p-t-1">
			<router-view></router-view>
		</div>
	</div>
</template>