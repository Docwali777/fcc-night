import { combineReducers } from 'redux'

import main_Redcuer from './main_Reducers'
import goingReducer from './isGoingReducer'

export default combineReducers({
      business: main_Redcuer,
      going: goingReducer
})
