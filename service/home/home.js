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
