import {combineReducers} from "redux";
import {initGameReducer} from "./initGameReducer";
import {checkGameReducer} from "./checkingReducer";


export const rootReducer = combineReducers({
    init: initGameReducer,
    check: checkGameReducer
})
