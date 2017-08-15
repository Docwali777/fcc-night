export default function goingReducer(state= [], action){
  switch(action.type){

    case 'INITIAL_STATE':
    return [...state,...action.payload]
    break

    case 'POST_IS_GOING':
    console.log('POST_IS_GOING- PREV STATE', state);
    console.log('POST_IS_GOING - ACTION.STATE', action.payload );
    return {going: action.payload}
    break;

    default:
    return state
  }
}
