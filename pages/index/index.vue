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
      <nav-item
        @click.native="navItemClick(item.path)"
        v-for="item in navBar"
        :key="item.id"
        :icon="item.icon"
        :title="item.title"
      ></nav-item>
    </view>
    <!-- 推荐商品 -->
    <view class="hot-goods">商品推荐</view>
    <!-- 商品列表 -->
    <goods-list :goodsList="goodsList" />
  </view>
</template>

<script>
import store from '@/store/index.js'
import navItem from '@/components/nav-item'
import goodsList from '@/components/goods-list'
import goodsMixin from '../../mixin/goodsList/index'

export default {
  components: {
    navItem,
    goodsList
  },
  mixins: [goodsMixin],
  data() {
    return {
      navBar: [
        {
          id: 1,
          icon: 'icon-ziyuan',
          title: '黑马超市',
          path: '/pages/goods/index'
        },
        {
          id: 2,
          icon: 'icon-guanyuwomen',
          title: '联系我们',
          path: '/pages/concat/index'
        },
        {
          id: 3,
          icon: 'icon-tupian',
          title: '社区图片',
          path: '/pages/pic/index'
        },
        {
          id: 4,
          icon: 'icon-shipin',
          title: '学习视频',
          path: '/pages/video/index'
        }
      ]
    }
  },
  computed: {
    swipers() {
      return store.state.home.swipers
    }
  },
  watch: {},
  onLoad() {
    store.dispatch('getSwipersAction')
  },

  methods: {
    navItemClick(path) {
      console.log(path)
      uni.navigateTo({ url: path })
    }
  }
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
}
</style>
