<template>
  <view class="item" v-if="item">
    <image class="img" :src="item.img_url" mode="scaleToFill" />
    <view class="right">
      <view class="title">{{ item.title }}</view>
      <view class="info">
        <view>发表时间：{{ item.add_time }}</view>
        <view>浏览次数：{{ item.click }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {}
}
</script>

<style scoped lang="scss">
.item {
  box-sizing: border-box;
  height: 200rpx;
  width: 100%;
  border-bottom: 1px solid $shop-color;
  padding: 10rpx;
  font-size: 30rpx;
  display: flex;
  .img {
    height: 100%;
    width: 200rpx;
    border-radius: 20rpx;
  }
  .right {
    width: 100%;
    margin-left: 10rpx;
    .title {
      height: 140rpx;
      overflow: hidden;
    }
    .info {
      width: 100%;
      display: flex;
      height: 40rpx;
      line-height: 40rpx;
      justify-content: space-between;
    }
  }
}
</style>
