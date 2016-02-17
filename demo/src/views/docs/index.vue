<template>
	<div class="card marked" id="overview">
		<div class="card-block" v-html="content | replaceLinks"></div>
	</div>
</template>

<script>
	import unhyphenate from 'mout/string/unhyphenate'
	import properCase from 'mout/string/properCase'
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
		computed: {
			page () {
				return this.$route.params.page
			},
			title () {
				if (this.page) {
					return properCase(unhyphenate(this.page))
				}
			}
		},
		created () {
			if (this.page) {
				document.title = `${ this.title } | AdminPlus Lite`
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