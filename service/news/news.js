import { myRequest } from '../request'

export function getNewsList() {
  return myRequest({
    url: '/getnewslist'
  })
}

export function getNewDetail(newId) {
  return myRequest({
    url: `/getnew/${newId}`
  })
}
