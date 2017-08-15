import axios from 'axios'

export function search(search) {
  return dispatch => {
    axios.post('/api/yelp/search', search).then(info => {
      dispatch({type: 'BUSINESS_SEARCH', payload: info.data.businesses})
    }).catch(e => {
      console.log('Error posting to yelp search', e);
    })
  }
}

export function isGoing(going) {
  return dispatch => {
    axios.post('/api/yelp/going', {going}).then(whoIsGoing => {
      dispatch({type: 'POST_IS_GOING', payload: whoIsGoing.data})
    }).catch(e => console.log('error posting api/yelp/going', e))
  }
}

export function initialState(){
  return dispatch =>{
    axios.get('/api/yelp/initialState')
      .then(allGoing =>{
        dispatch({
          type: 'INITIAL_STATE',
          payload: allGoing.data
        })
      }).catch(e =>{
        console.log('Axios error getting data', e);
      })
  }
}
