const search = require('../MODELS/search');
const keys = require('../PASSWORDS/keys')
const axios = require('axios');


module.exports = (app) =>{
  app.get('/api/yelp/search', (req, res)=>{
    axios({
        method: 'get',
      url: 'https://api.yelp.com/v3/businesses/search',
      headers: {
        Authorization: keys.YELP_AUTHORIZATION_KEY
      },
      params: {
        location: '22003',
        term: 'dancing'
      }
    }).then(term =>{
      res.send(term.data)
    }).catch(e =>{
      console.log(e);
    })
    //Authorization: Bearer C0Trt-fw7f3DlGBj-ZD3sg6wcpkAAI806K9AZ9P5-8EpuCllsMO_6fS3RSV_JL_4isQe4SyH-6N8ZhycXqK3_BTRYkffJr3b_1AAZya0tA-JYh3VaekkvjKEDgZRWXYx

  })
  app.post('/api/yelp/search', (req, res)=>{
let {city_state, term} = req.body



  })
}
