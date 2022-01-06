import {CREATE_RANDOM_NUMBER, DEFINE_NUMBER_OF_DIGITS, SET_ERROR, START_NEW_GAME} from "./types";

export const initialState = {
    numberOfDigits: '',
    hiddenNumber: '',
    error: '',

}

export const initGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.payload}
        case CREATE_RANDOM_NUMBER:
            return {...state, hiddenNumber: action.payload}
        case DEFINE_NUMBER_OF_DIGITS:
            return {...state, numberOfDigits: action.payload}
        default: return state;
    }
}