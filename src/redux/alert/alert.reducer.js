import {AlertActionTypes} from './alert.types';

const INITIAL_STATE = {
    open : false,
    severity : "success",
    text : ""
};

const alertReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case AlertActionTypes.OPEN_ALERT:
            return {
                ...state,
                ...action.payload
            }
        case AlertActionTypes.CLOSE_ALERT:
            return INITIAL_STATE

        default:
            return state;
    }
}

export default alertReducer;