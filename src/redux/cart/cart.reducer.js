import {CartActionTypes} from './cart.types';

const INITIAL_STATE = {
    data:null
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.SET_CART:
            return {
                ...state.data,
                data:[
                    ...action.payload
                ]
            }
        case CartActionTypes.REMOVE_CART:
            return INITIAL_STATE

        default:
            return state;
    }
}

export default cartReducer;