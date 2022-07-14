const BASE_URL = "http://110.40.236.242:8082/api"
// 将封装好的函数导入出去
// {url, method, data} 结构参数
export const myRequest = ({
	url,
	method,
	data
}) => {

	return new Promise((resolve, reject) => {
		uni.request({

			url: BASE_URL + url,

			method: method || "get",

			data: data || {},

			success: (res) => {
				if (res.data.status != 0) {
					return uni.showToast({
						title: "获取数据失败",
						icon: "none"
					})
				}
				resolve(res);
			},
			fail: (err) => {
				return uni.showToast({
					title: "请求接口失败",
					icon: "none"
				})
				reject(err)
			}
		})
	})
}
