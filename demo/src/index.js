// jQuery
import jQuery from 'jquery'
window.$ = jQuery

// AdminPlus Style
import 'adminplus/dist/adminplus.css'

// HIGHLIGHT.JS
import 'highlight.js/styles/github-gist.css'

// Router requires a component to start
import Main from './views/main'

// Vue router
import router from './router'

// Start
router.start(Main, 'app')