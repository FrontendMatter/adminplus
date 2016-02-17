// jQuery
import 'jquery'
import 'tether'
import 'bootstrap'

// AdminPlus Style
import 'adminplus/dist/adminplus.css'
import './sass/_docs.scss'

// HIGHLIGHT.JS
import 'highlight.js/styles/github-gist.css'

import Vue from 'vue'

// Router requires a component to start
const Main = Vue.extend({
	template: '<router-view></router-view>'
})

// Vue router
import router from './router'

// Start
router.start(Main, 'app')