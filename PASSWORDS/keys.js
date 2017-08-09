if(process.env.NODE_ENV !== 'production'){
  console.log('development');
   module.exports = require('./keys.dev')
} else {
  console.log('production');
module.exports =  require('./keys.prod.js')
}
