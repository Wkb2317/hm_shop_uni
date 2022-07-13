import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import cart from './cart/cart'
import home from './home/home'
import news from './news/news'
import member from './member/member'

const store = new Vuex.Store({

	state: {

	},

	mutations: {},

	actions: {},
	modules: {
		cart,
		home,
		news,
		member
	}
})

export default store
