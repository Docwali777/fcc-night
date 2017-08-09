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
    

  })
  app.post('/api/yelp/search', (req, res)=>{
    console.log(req.body);
let {city_state, term} = req.body
search.create({location: city_state, searchTerm: term}, (err, search)=>{
  if(err){console.log(err)}
  else {
    res.send(term)

  }
})


  })
}
