<template>
	<div class="card" id="overview">
		<div class="card-block" v-html="readme"></div>
	</div>
</template>

<script>
	import Layout from './layout'
	export default {
		data () {
			return {
				readme: null
			}
		},
		components: {
			Layout
		},
		ready () {
			this.readme = require('html!markdown!adminplus/README.md')
		}
	}
</script>