import {SET_ERROR_CHECK, SET_INPUT_VALUE} from "./types";

export const setErrorChecking = (error) => {
    return {
        type: SET_ERROR_CHECK,
        payload: error,
    }
}

export const setInputValue = (inputValue) => {
    return {
        type: SET_INPUT_VALUE,
        payload: inputValue,
    }
}