import {ADD_MOVE} from "./types";

const initialState = {
    cows: 0,
    bulls: 0,
    numberOfMoves: 0,
    error: '',
}

export const checkGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVE:
            return{...state, numberOfMoves: this.numberOfMoves++}
        default: return state;

    }
}