const express = require('express');
const app = express()
const path = require('path');
const PORT  = process.env.PORT || 3000
const axios = require('axios');
const keys = require('./PASSWORDS/keys')
console.log(keys);
if(process.NODE_ENV !== 'production'){
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware')
  const hotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev')

const compiler = webpack(config)

const middlware = devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true
})

app.use(middlware)
app.use(hotMiddleware(compiler))

}

app.use(express.static('public'))

app.get('/api/yelp/search', (req, res)=>{
  axios({
    method: 'get',
    url: 'https://api.yelp.com/v3/businesses/search',
    params: {
      location: '22003',
      term: 'dancing'
    },
    headers: {
      Authorization: keys.YELP_AUTHORIZATION_KEY
    }
  }).then(term =>{
    res.send(term.data)
  }).catch(e =>{
    console.log(e);
  })
  //Authorization: Bearer C0Trt-fw7f3DlGBj-ZD3sg6wcpkAAI806K9AZ9P5-8EpuCllsMO_6fS3RSV_JL_4isQe4SyH-6N8ZhycXqK3_BTRYkffJr3b_1AAZya0tA-JYh3VaekkvjKEDgZRWXYx

})

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, ()=>{
  console.log('Server running....');
})
