import request from './db-request'

function getDoubanInTheatersData(){
  const target = "movie/in_theaters"
  return request(target)
}