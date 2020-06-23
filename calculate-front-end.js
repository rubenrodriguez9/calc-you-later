/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require("./calculate-back-end")

let num1 = getInput(0);
let sign = getInput(1);
let num2 = getInput(2);

console.log(calculate(num1, num2, sign))



/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
