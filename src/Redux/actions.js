// export const
import {CREATE_RANDOM_NUMBER, DEFINE_NUMBER_OF_DIGITS, NUMBER_OF_DIGITS, SET_ERROR, START_NEW_GAME} from "./types";
import {createRandomDigits} from "../Utils/Business_Logic/bl";


export const setError = (message) => {
    return {
        type: SET_ERROR,
        payload: message
    }
}
export const createRandomDigit = (numberOfDigits) => {
    return {
    type: CREATE_RANDOM_NUMBER,
        payload: createRandomDigits(numberOfDigits),
    }
}

export const defineNumberOfDigits = (numberOfDigits) => {
    return {
        type: DEFINE_NUMBER_OF_DIGITS,
        payload: numberOfDigits,
    }
}

