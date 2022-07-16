<template>
  <view class="concat">
    <image
      class="img"
      src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"
    ></image>
    <view class="content">
      <view class="phone" @click="callPhone"> 电话: 400-888-888 </view>
      <view class="address"> 地址: 江苏省苏州市 </view>
    </view>
    <map
      class="map"
      :longitude="longitude"
      :latitude="latitude"
      :markers="markers"
    ></map>
  </view>
</template>

<script>
export default {
  components: {},
  data: () => ({
    latitude: 31.320348,
    longitude: 120.598592,
    markers: [
      {
        latitude: 31.320348,
        longitude: 120.598592,
        scale: 13,
        iconPath: '../../static/hmlogo.png',
        width: 30,
        height: 30
      }
    ]
  }),
  computed: {},
  methods: {
    callPhone() {
      uni.makePhoneCall({
        phoneNumber: '400-888-888' //仅为示例
      })
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
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
.concat {
  .img {
    width: 100vw;
    height: 370rpx;
  }
  .content {
    padding: 10rpx 20rpx;
    line-height: 80rpx;
    font-size: 30rpx;

    .phone {
      border-bottom: 2rpx solid #eee;
    }
  }

  .map {
    width: 100%;
    height: 700rpx;
  }
}
</style>
