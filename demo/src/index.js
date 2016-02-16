// jQuery
import 'jquery'
import 'tether'
import 'bootstrap'

// AdminPlus Style
import 'adminplus/dist/adminplus.css'
import './css/_docs.css'

// HIGHLIGHT.JS
import 'highlight.js/styles/github-gist.css'

import Vue from 'vue'

// Router requires a component to start
// import Main from './views/main'
const Main = Vue.extend({
	template: '<router-view></router-view>'
})

// Vue router
import router from './router'

// Start
router.start(Main, 'app')