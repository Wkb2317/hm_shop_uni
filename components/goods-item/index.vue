<template>
  <view class="goods" v-if="goodsInfo">
    <image class="img" :src="goodsInfo.img_url" mode="scaleToFill" />
    <view class="price">
      <view class="sell">{{ goodsInfo.sell_price }}</view>
      <view class="market">{{ goodsInfo.market_price }}</view>
    </view>
    <view class="title">
      {{ goodsInfo.title }}
    </view>
  </view>
</template>
<script>
export default {
  name: 'component_name',
  props: {
    goodsInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.goods {
  width: 335rpx;
  height: 620rpx;
  background: white;
  border-radius: 20rpx;
  padding: 10rpx;
  margin: 10rpx;
  box-shadow: 8rpx 8rpx rgba(241, 241, 241, 0.561);

  .img {
    width: 100%;
    height: 400rpx;
  }

  .price {
    display: flex;
    align-items: center;
    .sell {
      color: $shop-color;
      font-weight: 800;
      font-size: 40rpx;
      margin-right: 20rpx;
    }

    .market {
      color: rgb(153, 153, 153);
      text-decoration-line: line-through;
    }
  }
}
</style>
