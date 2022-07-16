import store from '../../store/index'
export default {
  data() {
    return { pageIndex: 1 }
  },
  computed: {
    goodsList() {
      return store.state.home.goodsList
    }
  },
  watch: {
    pageIndex: {
      handler: (newValue, oldValue) => {
        store.dispatch('getGoodsListAction', newValue).then((res) => {
          uni.stopPullDownRefresh()
        })
      },
      immediate: true
    }
  },
  onReachBottom() {
    this.pageIndex = this.pageIndex + 1
  },
  onPullDownRefresh() {
    this.pageIndex = 1
    store.dispatch('getGoodsListAction', this.pageIndex).then((res) => {
      uni.stopPullDownRefresh()
    })
  }
}
