// Q1 Write a Program to convert temperature from degrees Celsius to Fahrenheit.

let celsius = prompt("Enter temperature in Celsius:");
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Temperature in Fahrenheit: " + fahrenheit);

// Q2 Write a Program to find gross salary by adding % of HRA, DA, and TA of user choice. For example,

let baseSalary = prompt("Enter Base Salary:");
let hra = prompt("Enter HRA percentage:");
let da = prompt("Enter DA percentage:");
let ta = prompt("Enter TA percentage");


let hraAmount = (baseSalary * hra) / 100;
let daAmount = (baseSalary * da) / 100;
let taAmount = (baseSalary * ta) / 100;

let grossSalary = parseFloat(baseSalary) + hraAmount + daAmount + taAmount;

console.log("Gross Salary: Rs. " + grossSalary);

// Q3 Write a Program to find the third angle of a triangle if two other angles are given.

let angle1 = prompt("Enter first angle:");
let angle2 = prompt("Enter second angle:");

let thirdAngle = 180 - (parseInt(angle1) + parseInt(angle2));

console.log("Third angle of the triangle is: " + thirdAngle);

// Q4 Write Program to Swap two variables without using a third variable and without using + and - symbol

let A = prompt("Enter the first number A:");
let B = prompt("Enter the second number B:");

// Convert input to numbers
A = parseInt(A);
B = parseInt(B);

// Swapping using XOR
A = A ^ B;
B = A ^ B;
A = A ^ B;

console.log("After Swapping:");
console.log("A : " + A);
console.log("B : " + B);

// Q5 Write Program to print multiplication table without using any loop. For example,

let num = prompt("Enter any Number:");
num = parseInt(num);

console.log(num + " * 1 = " + (num * 1));
console.log(num + " * 2 = " + (num * 2));
console.log(num + " * 3 = " + (num * 3));
console.log(num + " * 4 = " + (num * 4));
console.log(num + " * 5 = " + (num * 5));
console.log(num + " * 6 = " + (num * 6));
console.log(num + " * 7 = " + (num * 7));
console.log(num + " * 8 = " + (num * 8));
console.log(num + " * 9 = " + (num * 9));
console.log(num + " * 10 = " + (num * 10));


