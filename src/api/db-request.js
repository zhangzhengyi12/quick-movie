import superagent from 'superagent'

const DOUBAN_API_URI = 'https://api.yinode.tech/douban/'

function request(target) {
  return new Promise((resolve, rejcet) => {
    const COM_URI = DOUBAN_API_URI + target
    superagent.get(COM_URI).end((err, res) => {
      if(err){
        rejcet(err)
      }else{
        resolve(res.body)
      }
    })
  })
}

export default request
