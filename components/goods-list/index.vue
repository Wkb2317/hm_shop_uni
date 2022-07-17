<template>
  <view class="list">
    <goods-item
      v-for="item in goodsList"
      :key="item.id"
      :goodsInfo="item"
      @click.native="navigetorToDetail(item.id)"
    ></goods-item>
  </view>
</template>

<script>
import goodsItem from '@/components/goods-item'

export default {
  props: {
    goodsList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    goodsItem
  },
  data: () => ({}),
  computed: {},
  methods: {
    navigetorToDetail(id) {
      uni.navigateTo({ url: `/pages/goods-detail/index?id=${id}` })
    }
  },
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
.list {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  background: #eee;
}
</style>
