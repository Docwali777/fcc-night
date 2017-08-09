import axios from 'axios'

export function search(search){
return dispatch =>{
  axios.post('/api/yelp/search', search)
    .then( info =>{
      dispatch({
        type: 'BUSINESS_SEARCH',
        payload: search
      })
    }).catch(e =>{
      console.log('Error posting to yelp search', e);
    })
}
}
