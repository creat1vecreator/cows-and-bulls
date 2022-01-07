import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setErrorChecking, setInputValue} from "../Redux/checkingActions";
import {Alert} from "./Alert";
import {checkIfLengthIsEqual} from "../Utils/Business_Logic/bl";
import {createRandomDigit, setErrorInitGame} from "../Redux/initGameActions";
import {requiredNumberOfDigits} from "../Utils/Validators/initAppValidator";
import {routes} from "../router/routes";

export const Form = () => {
    const dispatch = useDispatch();

    const error = useSelector(state => state.check.error);

    const inputValue = useSelector(state => state.check.inputValue);

    let [value, setValue] = useState("");

    const chosenNumberOfDigits = useSelector(state => state.init.numberOfDigits);

    return (
        <form>
            <div className="form-group">
                <label htmlFor="checking-numbers">Введите цифры</label>
                <input type="text" className="checking-numbers"
                       id="lala"
                       value={value}
                       onChange={(evt) => {
                           dispatch(setErrorChecking(''));

                           setValue(evt.target.value);
                           dispatch(setInputValue(inputValue));

                       }
                       }/>
                {error && <Alert text={error}/>}
            </div>
            <button className="btn btn-primary" onClick={(evt => {
                if (checkIfLengthIsEqual(chosenNumberOfDigits, evt.target.value)) {
                    dispatch(setErrorChecking(''));
                } else {
                    dispatch(setErrorChecking('Колиество введённых цифр не совпадает с количеством выбранных цифр'));
                }
            })}>Проверить</button>
            {error && <Alert text={error}/>}

            <button className="btn btn-primary" onClick={() => {
                window.open(routes.initGame)

            }}>Начать новую игру</button>
            {console.log(chosenNumberOfDigits)}

        </form>
    )
}