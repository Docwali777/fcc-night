if(process.env.NODE !== 'production'){
  console.log('development');
   module.exports = require('./keys.dev')
} else {
  console.log('production');
module.exports =  require('./keys.prod.js')
}
