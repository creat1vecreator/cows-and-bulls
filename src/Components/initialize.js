import React, {useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requiredNumberOfDigits} from "../Utils/Validators/initAppValidator";
import {createRandomDigit, defineNumberOfDigits, setError} from "../Redux/actions";
import {Alert} from "./Alert";
import {createRandomDigits} from "../Utils/Business_Logic/bl";
import {rootReducer} from "../Redux/rootReducer";

export const Init = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.init.error);
    const hiddenNumber = useSelector(state => state.init.hiddenNumber);
    const numberOfDigi = useSelector(state => state.init.numberOfDigits);

    const [numberOfDigits, setNumberOfDigits] = useState('');


    return (
        <div>
            <select className="custom-select" onChange={(evt) => {

                setNumberOfDigits(evt.target.value);
                if (requiredNumberOfDigits(numberOfDigits)) {
                    dispatch(defineNumberOfDigits(numberOfDigits));

                }

            }}>
                <option selected value="">Сколько цифр вы хотите отгадать</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <br/>
            <button className="btn btn-primary" onClick={() => {
                if (requiredNumberOfDigits(numberOfDigits)) {
                    dispatch(setError(''));
                    dispatch(createRandomDigit(numberOfDigits));
                } else {
                    dispatch(setError('Необходимо выбрать количество цифр, которые вы будете отгадывать'));
                }
            }}>Начать игру
            </button>
            {error && <Alert text={error}/>}
            {console.log(numberOfDigi)}
            {console.log(hiddenNumber)}


        </div>

    )
}
