import { getNewsList } from '../../service/news/news'

const news = {
  namespace: true,
  state: {
    newsList: []
  },

  mutations: {
    changeNewsList(state, data) {
      state.newsList = data
    }
  },

  actions: {
    async getNewsListAction({ commit }) {
      const res = await getNewsList()
      commit('changeNewsList', res.data.message)
    }
  }
}

export default news
