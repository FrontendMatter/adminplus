<template>
	<!-- Navbar -->
	<nav class="navbar navbar-dark bg-primary navbar-full navbar-fixed-top">
		<div class="container">
			<a class="navbar-brand m-r-2" href="#">Introduction</a>
	  		<div class="collapse navbar-toggleable-sm navbar-toggleable-md" id="navbarMenu">
				<ul class="nav navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#overview">Overview</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#structure">Structure</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#plugins">Plugins</a>
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