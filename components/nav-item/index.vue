<template>
  <div class="nav-item">
    <view class="circle">
      <i :class="'iconfont ' + icon"></i>
    </view>
    <view class="title">{{ title }}</view>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require
    },
    title: {
      type: String,
      require
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
$ciclewidth: 120rpx;

.nav-item {
  height: 200rpx;
  width: 180rpx;
  padding: 20rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .circle {
    width: $ciclewidth;
    height: $ciclewidth;
    line-height: $ciclewidth;
    border-radius: 50%;
    background: $shop-color;
    text-align: center;

    .iconfont {
      font-size: 40rpx;
      color: white;
    }
  }

  .title {
    margin: 20rpx;
    font-size: 30rpx;
  }
}
</style>
