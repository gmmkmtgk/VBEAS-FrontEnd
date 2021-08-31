import { CartActionTypes } from "./cart.types";
const setCart = (data) => {
    return {
        type: CartActionTypes.SET_CART,
        payload: data,
    };
};

export {setCart};
