import { BookActionTypes } from "./book.types";
const setBook = (data) => {
    return {
        type: BookActionTypes.SET_BOOK,
        payload: data,
    };
};

export {setBook};
