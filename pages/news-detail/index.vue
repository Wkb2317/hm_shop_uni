<template>
  <view>
    <view class="news-detail" v-for="item in detail" :key="item.id">
      <view class="title">
        {{ item.title }}
      </view>
      <view class="info">
        <view>发表时间：{{ item.add_time }}</view>
        <view>浏览次数：{{ item.click }}</view>
      </view>
      <view class="content">
        <rich-text :nodes="item.content"></rich-text>
      </view>
    </view>
  </view>
</template>

<script>
import dayjs from 'dayjs'
import { getNewDetail } from '../../service/news/news'

export default {
  components: {},
  data: () => ({
    detail: []
  }),
  computed: {},
  methods: {
    async getDetailData(id) {
      const res = await getNewDetail(id)
      this.detail = res.data.message.map((item) => {
        item.add_time = dayjs(item.add_time).format('YYYY-MM-DD')
        return item
      })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad(options) {
    this.getDetailData(parseInt(options.id))
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {}
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
}
</script>

<style scoped lang="scss">
.news-detail {
  padding: 0 10rpx;

  .title {
    font-size: 40rpx;
    font-weight: bold;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0;
  }
}
</style>
