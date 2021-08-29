import { AlertActionTypes } from "./alert.types";

const openAlert = (values) => {
    return {
        type: AlertActionTypes.OPEN_ALERT,
        payload: values
    };
};

const closeAlert = () => {
    return {
        type: AlertActionTypes.CLOSE_ALERT
    }
}

export { openAlert, closeAlert };
