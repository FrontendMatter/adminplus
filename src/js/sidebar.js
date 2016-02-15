/**
 * Class Sidebar
 */
class Sidebar {
	
	/**
	 * Contruct Sidebar
	 * @return {Sidebar} The Sidebar instance
	 */
	constructor () {
		// INTERNAL OPTIONS
		this.SCREEN_DESKTOP = null
		this.UPDATE_SCREEN_DEBOUNCE = 30

		// DOM SELECTORS
		this.SELECTOR = '.sidebar'
		this.TOGGLE_SELECTOR = '[data-toggle=sidebar]'
		this.NAV_SELECTOR = '.nav'
		this.NAV_ITEM_SELECTOR = '.nav-item'
		this.NAV_BUTTON_SELECTOR = `${ this.NAV_ITEM_SELECTOR } > a`
		this.SIDEBAR_NAV_BUTTON_SELECTOR = `${ this.SELECTOR } ${ this.NAV_BUTTON_SELECTOR }`

		// INTERNAL TIMERS
		this._updateScreenDebounce = null
	}

	/**
	 * Toggle a sidebar
	 * @param  {String|jQuery} sidebar 	A sidebar jQuery element or String DOM selector
	 */
	toggle (sidebar) {
		sidebar = this._sidebar(sidebar)
		sidebar.hasClass('visible') ? this.hide(sidebar) : this.show(sidebar)
	}

	/**
	 * Show a sidebar
	 * @param  {String|jQuery} sidebar 	A sidebar jQuery element or String DOM selector
	 * @param  {Boolean} transition 	Use transition (default true)
	 */
	show (sidebar, transition = true) {
		sidebar = this._sidebar(sidebar)
		this._hideAll()
		// DISABLE PAGE SCROLL ON MOBILE
		$('body').css('overflow', this.SCREEN_DESKTOP ? 'auto' : 'hidden')
		// USE TRANSITION
		if (transition) {
			sidebar.addClass('sidebar-transition')
			return setTimeout(() => sidebar.addClass('visible'), 10)
		}
		// WITHOUT TRANSITION
		sidebar.addClass('visible')
	}

	/**
	 * Hide a sidebar
	 * @param  {String|jQuery} sidebar 	A sidebar jQuery element or String DOM selector
	 */
	hide (sidebar) {
		sidebar = this._sidebar(sidebar)
		if (sidebar.hasClass('visible')) {
			// ENABLE PAGE SCROLL
			$('body').css('overflow', 'auto')
			// HIDE SIDEBAR
			sidebar.removeClass('visible')
			setTimeout(() => sidebar.removeClass('sidebar-transition'), 450)
		}
	}

	/**
	 * Internal helper that always returns a jQuery element
	 * @param  {jQuery|String} sidebar 	A sidebar jQuery element or String DOM selector
	 * @return {jQuery}         		A sidebar jQuery element
	 */
	_sidebar (sidebar) {
		if (sidebar instanceof jQuery === true) {
			return sidebar
		}
		return $(sidebar)
	}

	/**
	 * Run callback on each sidebar element
	 * @param  {Function} callback The callback
	 */
	_each (callback) {
		$(this.SELECTOR).each((k, sidebar) => callback.call(this, $(sidebar)))
	}

	/**
	 * Hide all visible sidebars on mobile screens and 
	 * sidebars with .closable-desktop class on desktop screens
	 */
	_hideAll () {
		this._each((sidebar) => {
			if (sidebar.hasClass('visible') && !this.SCREEN_DESKTOP || sidebar.hasClass('closable-desktop')) {
				this.hide(sidebar)
			}
		})
	}

	/**
	 * Show sidebars with .show-desktop class on desktop screens
	 */
	_showDesktop () {
		this._each((sidebar) => {
			if (sidebar.hasClass('show-desktop') && this.SCREEN_DESKTOP) {
				this.show(sidebar, false)
			}
		})
	}

	/**
	 * Internal method to keep track of the screen size
	 */
	_updateScreen () {
		clearTimeout(this._updateScreenDebounce)
		this._updateScreenDebounce = setTimeout(() => {
			this.SCREEN_DESKTOP = $(window).width() >= 768
			if (this.SCREEN_DESKTOP) {
				return this._showDesktop()
			} 
			this._hideAll()
		}, this.UPDATE_SCREEN_DEBOUNCE)
	}

	/**
	 * Body touchstart or click event handler when on mobile
	 * @param  {DOMEvent} e 	The DOM event
	 */
	_closeBody (e) {
		this._each((sidebar) => {
			if (sidebar.hasClass('visible') && !this.SCREEN_DESKTOP || sidebar.hasClass('closable-desktop')) {
				// if the target of the click is NOT the sidebar container
				// or a descendant of the sidebar container
				if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
					this.hide(sidebar)
				}
			}
		})
	}

	/**
	 * Initialize Sidebars
	 */
	init () {
		// UPDATE THE INITIAL SCREEN SIZE
		this._updateScreen()

		// SHOW SIDEBARS ON DESKTOP SCREENS
		this._showDesktop()

		// KEEP TRACK OF THE SCREEN SIZE
		$(window).resize(this._updateScreen.bind(this))

		// SIDEBAR COLLAPSE MENUS
		$(this.SIDEBAR_NAV_BUTTON_SELECTOR).on('click', (e) => {
			const button = $(e.currentTarget)
			if (button.next('ul').html()) {
				e.preventDefault()
				const parent = button.parent()
				// Toggle Open Classes
				if (parent.hasClass('open')) {
					parent.removeClass('open')
				} 
				else {
					const nav = button.closest(this.NAV_SELECTOR)
					const submenuOpen = nav.find(`${ this.NAV_ITEM_SELECTOR }.open`)
					// Close Parent Open Submenus
					submenuOpen.removeClass('open')
					parent.addClass('open')
				}
			}
		})

		// TOGGLE SIDEBAR
		$(this.TOGGLE_SELECTOR).on('click', (e) => {
			e.stopPropagation()
			const sidebar = $($(e.currentTarget).data('target'))
			if (sidebar) {
				this.toggle(sidebar)
			}
		})

		// CLOSE SIDEBAR ON MOBILE OR FLOATING WHEN BODY IS CLICKED
		$('body').on('click touchstart', this._closeBody.bind(this))
	}
}

export default Sidebar
module.exports = exports.default