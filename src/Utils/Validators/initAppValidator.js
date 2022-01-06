export const requiredNumberOfDigits = (string) => {
   return  string !== '' && isFinite(+string);

}