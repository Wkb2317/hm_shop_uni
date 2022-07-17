import {
  getSwipers,
  getGoodsListData,
  getImgCategory
} from '@/service/home/home.js'

const home = {
  namespace: true,
  state: {
    swipers: [],
    goodsList: [],
    imgCategory: []
  },

  mutations: {
    changeSwipers(state, data) {
      state.swipers = data
    },
    changeGoodsList(state, data) {
      state.goodsList.push(...data)
    },
    resetGoodsList(state, data) {
      state.goodsList = data
    },
    changeImgCategory(state, data) {
      state.imgCategory = data
    }
  },

  actions: {
    async getSwipersAction({ commit }) {
      const res = await getSwipers()
      if (res.data?.message) {
        commit('changeSwipers', res.data.message)
      }
    },
    async getGoodsListAction({ commit }, pageindex) {
      const res = await getGoodsListData(pageindex)
      return new Promise((resolve, reject) => {
        if (res.data?.message) {
          res.data.message.forEach((item) => {
            item.img_url =
              'http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg'
          })
          if (pageindex === 1) {
            commit('resetGoodsList', res.data.message)
            resolve(true)
          } else {
            commit('changeGoodsList', res.data.message)
            resolve(true)
          }
        }
      })
    },
    async getImgCategoryAction({ commit }) {
      const res = await getImgCategory()
      commit('changeImgCategory', res.data.message)
    }
  }
}

export default home
