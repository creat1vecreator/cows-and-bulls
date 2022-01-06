import {CREATE_RANDOM_DIGIT, DEFINE_NUMBER_OF_DIGITS, SET_ERROR, START_NEW_GAME} from "./types";
import {combineReducers} from "redux";
import {initGameReducer} from "./initGameReducer";
import {checkGameReducer} from "./checkingReducer";


export const rootReducer = combineReducers({
    init: initGameReducer,
    check: checkGameReducer
})
