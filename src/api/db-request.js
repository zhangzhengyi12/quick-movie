import superagent from 'superagent'

const DOUBAN_API_URI = 'https://api.douban.com/v2/'

const request = function(target) {
  return new Promise((resolve, rejcet) => {
    const COM_URI = DOUBAN_API_URI + target
    superagent.get(COM_URI).end((err, res) => {
      if(err){
        rejcet(err)
      }else{
        resolve(res)
      }
    })
  })
}
