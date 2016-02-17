<template>
	<div class="card marked" id="overview">
		<div class="card-block" v-html="content | replaceLinks"></div>
	</div>
</template>

<script>
	import Layout from './layout'
	export default {
		filters: {
			replaceLinks (value) {
				if (value) {
					return value.replace(/docs\/([a-zA-Z0-9_-]+)\.md/ig, '#!/$1')
				}
				return value
			}
		},
		data () {
			return {
				content: null
			}
		},
		route: {
			canReuse: false
		},
		components: {
			Layout
		},
		computed: {
			page () {
				return this.$route.params.page
			}
		},
		ready () {
			if (this.page) {
				this.content = require('html!markdown!adminplus/docs/' + this.page + '.md')
			}
			else {
				this.content = require('html!markdown!adminplus/README.md')
			}
		}
	}
</script>

<style>
	.card-block {
		position: relative;
		overflow: hidden;
	}
</style>