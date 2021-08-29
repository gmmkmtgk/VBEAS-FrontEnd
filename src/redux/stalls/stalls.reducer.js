import {StallsActionTypes} from './stalls.types';

const INITIAL_STATE = {
    data:null
}

const stallsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case StallsActionTypes.SET_STALLS:
            return {
                ...state.data,
                ...action.payload
            }
        default:
            return state;
    }
}

export default stallsReducer;