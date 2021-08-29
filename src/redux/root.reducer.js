import { combineReducers } from "redux";
// import alertReducer from "./alert/alert.reducer";
import stallsReducer from "./stalls/stalls.reducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

//Reducers;
// import cartReducer from "./cart/cart.reducer";
// import directoryReducer from "./directory/directory.reducer";
// import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["cart"],
// };

const rootReducer = combineReducers({
    user: userReducer,
    stalls: stallsReducer,
    // cart: cartReducer,
    // directory: directoryReducer,
    // shop: shopReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
