
export const createRandomDigits = (numberOfDigits) => {
    let res = ''
    let nums = +numberOfDigits;
    for (let i = 0; i < nums ; i++) {
       res += Math.floor(Math.random() * (9 + 1));
    }
    return res;

}
//сравнивает длину введённого числа с выбранным
export const checkIfLengthIsEqual = (inputDigitsLength, chosenDigitsLength) => {
   return  inputDigitsLength.length === chosenDigitsLength.length;
}