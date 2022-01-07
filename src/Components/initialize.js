import {useDispatch, useSelector} from "react-redux";
import {requiredNumberOfDigits} from "../Utils/Validators/initAppValidator";
import {createRandomDigit, defineNumberOfDigits, setErrorInitGame} from "../Redux/initGameActions";
import {Alert} from "./Alert";


export const Init = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.init.errorInitGame);
    const hiddenNumber = useSelector(state => state.init.hiddenNumber);
    const numberOfDigits = useSelector(state => state.init.numberOfDigits);



    return (
        <div>
            <select className="custom-select" onChange={(evt) => {
                dispatch(defineNumberOfDigits(evt.target.value));


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
                    dispatch(setErrorInitGame(''));
                    dispatch(createRandomDigit(numberOfDigits));
                } else {
                    dispatch(setErrorInitGame('Необходимо выбрать количество цифр, которые вы будете отгадывать'));
                    dispatch(defineNumberOfDigits(''));
                    dispatch(createRandomDigit(''));


                }
            }}>Начать новую игру игру
            </button>
            {!(error) && hiddenNumber ? window.open('/checkGame') : <Alert text={error}/>}
            {console.log(numberOfDigits)}
            {console.log(hiddenNumber)}


        </div>

    )
}
