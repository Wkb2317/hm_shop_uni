<template>
	<view class="content">首页</view>
</template>

<script>
import store from '@/store/index.js'
export default {
	data() {
		return {}
	},
	onLoad() {
		console.log(this.$store.state.home.swipers)
	},
	methods: {}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
