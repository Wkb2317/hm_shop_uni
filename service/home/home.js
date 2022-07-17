import { myRequest } from '../request.js'

export function getSwipers() {
  return myRequest({
    url: '/getlunbo'
  })
}

export function getGoodsListData(pageindex) {
  return myRequest({
    url: '/getgoods',
    data: { pageindex }
  })
}

export function getImgCategory() {
  return myRequest({
    url: '/getimgcategory'
  })
}

export function getImages(id) {
  return myRequest({
    url: `/getimages/${id}`
  })
}

export function getThumImages(id) {
  return myRequest({
    url: `/getthumimages/${id}`
  })
}

export function getGoodsIndo(id) {
  return myRequest({
    url: `/goods/getinfo/${id}`
  })
}

export function getGoodsDesc(id) {
  return myRequest({
    url: `/goods/getdesc/${id}`
  })
}
