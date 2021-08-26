//One parameter arrow Function 3.1
const getOutput = (number) => number / 5;
// console.log(getOutput(100)); 
//Two parameter arrow Function 3.2
const multiply = (num1,num2) => (num1+2) * (num2+2);
console.log(multiply(10,5));
//three parameter arrow Function 3.3
const multiplyThree = (num1,num2,num3) => num1*num2*num3;
console.log(multiplyThree(10,10,10));
//Two parameter arrow Function 3.4
const multipleLine = (num1,num2) =>{
    const number1 = num1+2;
    const number2 = num2+2;
    const result = number1 * number2;
    return result;
}
console.log(multipleLine(10,10))
