//Q-2 write a javascript programe to to calculate given formula.

// 1. a**2 - b**2 = (a-b)(a+b)

let a = 6,b = 3;
let formula =(a ** 2) - (b ** 2);
let formula2 = (a - b) * (a + b);

console.log("the formula is :",formula, "is iqual too",formula2,formula === formula2);

// answer is : true 
 
// 2 (a-b)**2 = a**2 - 2ab + b**2

let a1 = 6,b1 = 3;
let formula3 =(a1-b1)** 2;
let formula4=(a1 ** 2) - (2 * a1 * b1) + (b1 ** 2);

console.log("the formula is",formula3,"is iqual too ",formula4,formula3 === formula4);

// answer is : true 
 
// 3 (a=b=c)**2 = a**2 + b**2 + c**2 + 2ab + 2ac + 2bc

let a2 = 6, b2 = 3, c = 9;
let formula5 = (a2 + b2 + c) ** 2;
let formula6 = (a2 ** 2) + (b2 ** 2) +(c ** 2) + (2 * a2 * b2) + (2 * a2 * c) + (2 * b2 * c);

console.log("The Formula is :",formula5, "Is Equal To",formula6, formula5 === formula6);

// answer is : true 

// 4 (a-b-c)**2 = a**2 + b**2 + c**2 - 2ab - 2ac + 2bc

let a3 = 6, b3 = 3, c3 = 9;
let formula7 = (a3 - b3 - c3) ** 2;
let formula8 = (a3 ** 2) + (b3 ** 2) + (c3 ** 2) - (2 * a3 * b3) - (2 * a3 * c3) + (2 * b3 * c3);

console.log("The Formula is :",formula7, "Is Equal To",formula8, formula7 === formula8);

// answer is : true 

// 5 (a-b)**3 = a**3 -3a**2b + 3ab**2 - b**3

let a4 = 6, b4 = 3;
let formula9 = (a4 - b4) ** 3;
let formula10 = (a4 ** 3) - (3 * (a4 ** 2) * b4) + (3 * a4 * (b4 ** 2)) - (b4 ** 3);

console.log("The Formula is :",formula9, "Is Equal To",formula10, formula9 === formula10);

// answer is : true