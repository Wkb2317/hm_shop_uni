<template>
  <view class="pic">
    <view class="left">
      <scroll-view class="left-scroll" scroll-y>
        <view
          v-for="item in imgCategory"
          :key="item.id"
          @click="handleCateGoryClick(item.id)"
          :class="{ item: true, active: item.id === activeId }"
          >{{ item.title }}</view
        >
      </scroll-view>
    </view>
    <view class="right">
      <scroll-view v-if="images.length" class="right-scroll" scroll-y>
        <view class="right-item" v-for="item in images">
          <image
            @click="handleImgClick(item.img_url)"
            class="img"
            :src="item.img_url"
            mode="scaleToFill"
          />
          <view class="title">{{ item.title }}</view>
        </view>
      </scroll-view>
      <view v-else> 暂无数据 </view>
    </view>
  </view>
</template>

<script>
import { getImages } from '../../service/home/home'
export default {
  components: {},
  data: () => ({
    activeId: '',
    images: []
  }),
  computed: {
    imgCategory() {
      const imgCategory = this.$store.state.home.imgCategory
      if (imgCategory.length) {
        this.activeId = imgCategory[0].id
      }
      return imgCategory
    }
  },
  methods: {
    handleCateGoryClick(id) {
      this.activeId = id
    },

    async handleGetImagesData(id) {
      const res = await getImages(id)
      this.images = res.data.message
    },
    handleImgClick(current) {
      const urls = this.images.map((item) => {
        return item.img_url
      })
      uni.previewImage({
        current,
        urls
      })
    }
  },
  watch: {
    activeId(newValue, oldValue) {
      this.handleGetImagesData(newValue)
    }
  },

  // 页面周期函数--监听页面加载
  onLoad() {
    this.$store.dispatch('getImgCategoryAction')
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
.pic {
  width: 100%;
  height: 100%;
  display: flex;

  .left {
    width: 200rpx;
    height: 100%;
    border-right: 1px solid #eee;
    .left-scroll {
      height: calc(100vh - 100rpx);
      width: 100%;
    }

    .item {
      border-top: 1px solid #eee;
      height: 120rpx;
      line-height: 120rpx;
      text-align: center;
      font-size: 30rpx;
    }

    .active {
      background: $shop-color;
      color: white;
    }
  }

  .right {
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0 20rpx;

    .right-scroll {
      height: calc(100vh - 100rpx);
      width: 100%;
      .right-item {
        padding: 20rpx 0;
        .img {
          width: 100%;
          border-radius: 20rpx;
        }

        .title {
          font-size: 30rpx;
        }
      }
    }
  }
}
</style>
