import request from './db-request'

function getLasetMovieResouceList() {
  const target = 'movie/lastMovies'
  return request(target)
}

export { getLasetMovieResouceList }
