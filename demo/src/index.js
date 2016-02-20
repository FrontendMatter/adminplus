// jQuery
import 'jquery'
import 'tether'
import 'bootstrap'

// AdminPlus Style
import 'adminplus/dist/adminplus.css'
import './sass/_docs.scss'

// HIGHLIGHT.JS
import 'highlight.js/styles/github-gist.css'

// Vue library
import Vue from 'vue'

// Vue router
import router from './router'

// Router requires a component to start
const Main = Vue.extend({
	template: '<router-view></router-view>'
})

// Start
router.start(Main, 'app')