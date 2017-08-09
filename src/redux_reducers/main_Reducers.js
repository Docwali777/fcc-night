export default function main_Redcuer(state= null, action){
  switch(action.type){
    case 'BUSINESS_SEARCH':
    return action.payload
    break;
    default: return state
  }
}
