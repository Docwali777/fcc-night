import axios from 'axios'

export function search(search){
return dispatch =>{
  axios.post('/api/yelp/search', search)
    .then( info =>{
      dispatch({
        type: 'BUSINESS_SEARCH',
        payload: info.data.businesses
      })
    }).catch(e =>{
      console.log('Error posting to yelp search', e);
    })
}
}

export function INITIAL_DATA_BASED_LOCATION(){
  return dispatch =>{
    axios.get('/api/yelp/search')
      .then(info =>{
        console.log(info);
        dispatch({
          type: 'INITIAL_DATA_BASED_LOCATION',
          payload: info.data.businesses
        })
      }).catch(e =>{console.log('err axios,get');})
  }
}
