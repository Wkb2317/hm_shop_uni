<template>
  <view class="content">
    <!-- 轮播图 -->
    <swiper class="swiper" indicator-dots autoplay circular>
      <swiper-item class="swiper-item" v-for="item in swipers" :key="item.id">
        <image class="img" :src="item.img" mode="scaleToFill" />
      </swiper-item>
    </swiper>
    <!-- 导航栏 -->
    <view class="nav-bar">
      <nav-item icon="icon-ziyuan" title="黑马超市"></nav-item>
      <nav-item icon="icon-guanyuwomen" title="联系我们"></nav-item>
      <nav-item icon="icon-tupian" title="社区图片"></nav-item>
      <nav-item icon="icon-shipin" title="学习视频"></nav-item>
    </view>
    <!-- 推荐商品 -->
    <view class="hot-goods">商品推荐</view>
    <!-- 商品列表 -->
    <view class="list">
      <view v-for="item in goodsList" :key="item.id">
        <goods-item :goodsInfo="item"></goods-item>
      </view>
    </view>
  </view>
</template>

<script>
import store from '@/store/index.js'
import navItem from '@/components/nav-item'
import goodsItem from '@/components/goods'

export default {
  components: {
    navItem,
    goodsItem
  },
  data() {
    return {
      pageIndex: 1
    }
  },
  computed: {
    swipers() {
      return store.state.home.swipers
    },
    goodsList() {
      return store.state.home.goodsList
    }
  },
  watch: {
    pageIndex: {
      handler: (newValue, oldValue) => {
        store.dispatch('getGoodsListAction', newValue).then((res) => {
          console.log(res)
          uni.stopPullDownRefresh()
        })
      }
    }
  },
  onLoad() {
    store.dispatch('getSwipersAction')
    store.dispatch('getGoodsListAction', this.pageIndex).then((res) => {
      console.log(res)
    })
  },
  onReachBottom() {
    this.pageIndex = this.pageIndex + 1
  },
  onPullDownRefresh() {
    this.pageIndex = 1
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .swiper {
    height: 380rpx;
    width: 100vw;

    .swiper-item {
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .nav-bar {
    display: flex;
    justify-content: space-around;
  }

  .hot-goods {
    width: 100vw;
    height: 100rpx;
    line-height: 100rpx;
    background: white;
    border: 10rpx solid #eee;
    letter-spacing: 20px;
    color: $shop-color;
    text-align: center;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #eee;
  }
}
</style>
