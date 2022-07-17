<template>
  <view class="news" v-if="newsList.length">
    <newItem
      v-for="item in newsList"
      :key="item.id"
      :item="item"
      @click.native="newsItemClick(item.id)"
    />
  </view>
</template>

<script>
import dayjs from 'dayjs'
import newItem from '../../components/new-item'

export default {
  components: {
    newItem
  },
  data() {
    return {}
  },
  computed: {
    newsList() {
      const list = this.$store.state.news.newsList.map((item) => {
        item.add_time = dayjs(item.add_time).format('YYYY-MM-DD')
        return item
      })
      return list
    }
  },
  onLoad(options) {
    this.$store.dispatch('getNewsListAction')
  },
  methods: {
    newsItemClick(newId) {
      console.log('newsItemClick:', newId)
      uni.navigateTo({ url: `/pages/news-detail/index?id=${newId}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  height: 100%;
}
</style>
