import request from './db-request'

function getDoubanComingSoonData(){
  const target = "douban/movie/coming_soon"
  return request(target)
}

// function getMoviewDeatilData(id){
//   const target = "douban/movie/subject/" + id
//   return request(target)
// }

export {
  getDoubanComingSoonData
  // getMoviewDeatilData
}