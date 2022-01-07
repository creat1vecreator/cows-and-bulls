import {ADD_MOVE, SET_ERROR_CHECK, SET_INPUT_VALUE} from "./types";

const initialState = {
    cows: 0,
    bulls: 0,
    numberOfMoves: 0,
    errorChecking: '',
    inputValue: '',
}

export const checkGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_CHECK:
            return {...state, errorChecking: action.payload}
        case SET_INPUT_VALUE:
            return {...state, inputValue: action.payload}
        case ADD_MOVE:
            return{...state, numberOfMoves: state.numberOfMoves++}
        default: return state;

    }
}