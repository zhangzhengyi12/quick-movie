import request from './db-request'

function getDoubanInTheatersData(){
  const target = "movie/in_theaters"
  return request(target)
}

function getMoviewDeatilData(id){
  const target = "movie/subject/" + id
  return request(target)
}

export {
  getDoubanInTheatersData,
  getMoviewDeatilData
}