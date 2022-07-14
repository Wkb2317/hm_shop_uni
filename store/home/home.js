import {
	getSwipers
} from '@/service/home/home.js'

const home = {
	namespace: true,
	state: {
		swipers: []
	},

	mutations: {},

	actions: {
		async getSwipersAction() {
			const res = await getSwipers()
			console.log(res);
		}
	}
}

export default home
