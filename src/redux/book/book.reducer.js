import {BookActionTypes} from './book.types';

const INITIAL_STATE = null;

const bookReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case BookActionTypes.SET_BOOK:
            return {
                ...state,
                ...action.payload
            }
        case BookActionTypes.REMOVE_BOOK:
            return INITIAL_STATE;

        default:
            return state;
    }
}

export default bookReducer;