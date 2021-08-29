import { StallsActionTypes } from "./stalls.types";
const setStalls = (data) => {
    return {
        type: StallsActionTypes.SET_STALLS,
        payload: data,
    };
};

export {setStalls};
