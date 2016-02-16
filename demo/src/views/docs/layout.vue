<template>
	<!-- Navbar -->
	<nav class="navbar navbar-dark bg-primary navbar-full navbar-fixed-top">
		<div class="container">
			<a class="navbar-brand m-r-2" href="#">AdminPlus Docs</a>
	  		<div class="collapse navbar-toggleable-sm navbar-toggleable-md" id="navbarMenu">
				<ul class="nav navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#overview">Introduction</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Structure</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="">Basic Usage</a></li>
						</ul>
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