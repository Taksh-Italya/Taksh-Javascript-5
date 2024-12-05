//1 Write JS Program to check number is Palindrome or not

let n = Number(prompt('enter your number'));
let value = n;
let reversnumber = 0;
while (n > 0) {
    let number = n % 10;
    reversnumber = reversnumber * 10 + number;
    n = (n - (n % 10) ) / 10;
}
if (value === reversnumber) {
    console.log('palindrome number ',value)
}
else {
    console.log('not a palindrome number ',value)
}

// output :  palindrome number 121

//2 Print Series 1, 4, 3, 16, 5, ....

// for(i = 1; i <=10 ; i++){
//     if(i%2 == 0){
//         console.log(i**2);
//     }
//     if(i%2 ==1){
//         console.log(i); 
//     }
// }

// output :- 1,4,3,16,5

//3 Print Multiplication table of n.

// let b = +prompt('Enter a number :-');
// for(let i =1; i<=10; i++){
//     table = i * b;
//     console.log(b + "x" + i+"="+table);  
// }

//output :- 1 * 1 = 1

//4 find out sum of digit of given number

// let n = Number(prompt("Enter a Number ==>"));
// let sum = 0;

// for(let i =1; i <= n; i++){
//     sum += i;
//     console.log(sum);  
// }

// output :- 1,3,6,10,15,21..

//5 print series 1, 1, 2, 3, 5, 8, ...

// let e = Number(prompt("Enter a Number :"));
// let a = 1; b = 1;
// let c;

// for(let i = 1; i <= e; i++){
//     if(i == 1){
//         console.log(a);
//     }else if(i == 2){
//         console.log(b);
//     }else{
//         c = a + b;
//         a = b;
//         b = c;
//         console.log(c);
//     }
// }

// output :- 1,1,2,3,5