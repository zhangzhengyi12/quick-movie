import request from './db-request'

function getDoubanInTheatersData(){
  const target = "douban/movie/in_theaters"
  return request(target)
}

function getMoviewDeatilData(id){
  const target = "douban/movie/subject/" + id
  return request(target)
}

export {
  getDoubanInTheatersData,
  getMoviewDeatilData
}