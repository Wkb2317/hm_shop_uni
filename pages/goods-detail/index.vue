<template>
  <div class="goods-detail">
    <swiper class="swiper" indicator-dots autoplay circular>
      <swiper-item
        class="swiper-item"
        v-for="(item, index) in swipers"
        :key="index"
      >
        <image class="img" :src="item.src" mode="scaleToFill" />
      </swiper-item>
    </swiper>

    <view class="info">
      <view class="price">
        <view class="sell">￥{{ goodsInfo.sell_price }}</view>
        <view class="market">￥{{ goodsInfo.market_price }}</view>
      </view>
      <view class="title">{{ goodsInfo.title }}</view>
      <view class="attribute">
        <view>货号：{{ goodsInfo.goods_no }}</view>
        <view>库存：{{ goodsInfo.stock_quantity }}</view>
      </view>
    </view>

    <view class="detail">
      <view class="title">详细介绍</view>
      <rich-text class="content" :nodes="goodsDesc.content"></rich-text>
    </view>

    <view class="nav">
      <uni-goods-nav
        :fill="true"
        :options="options"
        :buttonGroup="buttonGroup"
        @click="onClick"
        @buttonClick="buttonClick"
      />
    </view>
  </div>
</template>

<script>
import {
  getThumImages,
  getGoodsIndo,
  getGoodsDesc
} from '../../service/home/home'

export default {
  components: {},
  data: () => ({
    swipers: [],
    goodsInfo: {},
    goodsDesc: {},
    options: [
      {
        icon: 'headphones',
        text: '客服'
      },
      {
        icon: 'shop',
        text: '店铺',
        info: 2,
        infoBackgroundColor: '#007aff',
        infoColor: 'red'
      },
      {
        icon: 'cart',
        text: '购物车',
        info: 2
      }
    ],
    buttonGroup: [
      {
        text: '加入购物车',
        backgroundColor: '#ff0000',
        color: '#fff'
      },
      {
        text: '立即购买',
        backgroundColor: '#ffa200',
        color: '#fff'
      }
    ]
  }),
  computed: {},
  methods: {
    onClick(e) {
      uni.showToast({
        title: `点击${e.content.text}`,
        icon: 'none'
      })
    },
    buttonClick(e) {
      console.log(e)
      this.options[2].info++
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  async onLoad(options) {
    const id = options.id

    const swiperRes = await getThumImages(id)
    this.swipers = swiperRes.data.message

    const info = await getGoodsIndo(id)
    this.goodsInfo = info.data.message[0]

    const desc = await getGoodsDesc(id)
    this.goodsDesc = desc.data.message[0]
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
.goods-detail {
  .swiper {
    height: 500rpx;
    .swiper-item {
      .img {
        width: 100%;
      }
    }
  }

  .info {
    width: 100%;

    .price {
      padding: 0 20rpx;
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

  .title {
    font-size: large;
    padding: 20rpx;
  }

  .attribute {
    border-top: 10rpx solid #eee;
    border-bottom: 10rpx solid #eee;
    view {
      padding: 0 20rpx;
      line-height: 60rpx;
    }
  }

  .detail {
    .title {
      padding: 20rpx;
      border-bottom: 1px solid #eee;
    }
    .content {
      padding: 20rpx;
      line-height: 50rpx;

      ::v-deep .gomeImgLoad {
        width: 750rpx;
      }
    }
  }

  .nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9;
  }
}
</style>
