export default function main_Redcuer(state= null, action){
  switch(action.type){
    case 'INITIAL_DATA_BASED_LOCATION':
      return action.payload
      break;

    case 'BUSINESS_SEARCH':
    return action.payload
    break;
    default: return state
  }
}
