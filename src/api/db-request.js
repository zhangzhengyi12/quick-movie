import superagent from 'superagent'

const BASE_URL = 'https://api.yinode.tech/'

function request(target) {
  return new Promise((resolve, rejcet) => {
    const COM_URI = BASE_URL + target
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
