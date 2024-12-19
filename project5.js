//Program : 1 

// let mycolor = ["Red", "Green", "White", "Black"];

// console.log(mycolor.join(", "));
// Output :- Red, Green, White, Black

// console.log("Red + Green + White + Black");
// Output :- Red + Green + White + Black

// console.log(mycolor.slice(0, 3).join(", "));
// Output :- Red, Green, White

// console.log(mycolor[0]);
// Output :- Red

// console.log(mycolor.slice(1, 3).join(", "));
// Output :- Green, White

// mycolor.push("orange");

// console.log(mycolor.join(", "));
// Output :- Red, Green, White, Black, orange

//Program : 2

// var arr = [100,200,300,400,500,600,700,800,900,1000];
// let sum=sumFor = 0;
// for(let i=0;i<arr.length;i++){
//     sumFor += arr[i]
// }
// arr.forEach((ele,index) => {
//     sum += ele;
// })
// console.log("Sum using for loop "+sumFor)
// console.log("Sum using forEach "+sum)

// Output :=  Sum using for loop 5500 , Sum using forEach 5500

//Program : 3

// var arr = [110, 20, 30, 40, 50, 610, 700, 80, 9, 100,0];
// var min = (max = arr[0]);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("minimum is ===> "+ min);
// console.log("maximum is ===> "+ max);

// Output := minimum is ===> 0 , maximum is ===> 700

//Program : 4



//Program : 5

//  let num = [-23,-20,-17,-12,-5,0,1,5,12,19,20];
//  let arr = num.filter(function(ele,index) {
//     return ele >= 0;
// })

// console.log(arr);

// Output := (6) [0, 1, 5, 12, 19, 20]

//Program : 6 

// let arr = [2,5,6,3,8,9];

// let square = arr.map((ela,index) => {
//     return ela ** 2;
// });

// console.log("array ===>",square);

// Output := (6) [4, 25, 36, 9, 64, 81]

//Program : 7

let num = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let ascending = num.sort((a, b) => a - b);
console.log("Ascending value:", ascending); 

// Output :- Ascending value: (11) [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20]

let descending = num.sort((a, b) => b - a);
console.log("Descending value:", descending);

// Output :- Descending value: (11) [20, 19, 12, 5, 1, 0, -5, -12, -17, -20, -23]

//Program : 8

// let words = ['Paython', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby']
// let arr = words.filter((ele, index) => {
//     return ele.length >= 8;
// })
// console.log(arr);

// output : [javascript]

//Program : 9

// 1.

// let x = "airplane";
// console.log(x[2]); 

// // Output :- r

// 2.

// let X = "oxoxoxox";
// let output = "";

// for (let i = 0; i < x.length; i++) {
//     output += (i % 2 === 0) ? X[i].toLowerCase() : X[i].toUpperCase();
// }
// console.log(output);

// Output: = "oXoXoXoX"

//Program : 10

// let toreverse = ["Apple","Banana","Orange","Mango"];

// let rev = toreverse.reverse()
// console.log(toreverse);

// Output := ['Mango', 'Orange', 'Banana', 'Apple']

//Program : 11

// let drinks = ["Maza", "Coca-Cola", "Fanta"];
// console.log(drinks.includes("Coca-Cola")+`,Found the array.`); 
// console.log(drinks.includes("Fruti")+`,Found the array.`); 

// Output := True,Found the array. 
// Output := false,Found the array.

//Program : 12

// let Name = prompt("Enter Your Name :-");
// console.log("Total Number of Character is :-", Name.length); 

// Output := Total Number of Character is :- 5

//Program : 13

// let dog = `I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning`;
// console.log("String Before Replace :-",dog);

// let cat = dog.replace(/dog/g, "cat");
// console.log("String After Replace :-",cat); 

// Output:= "I often take a walk with my cat in the evening.

//Program : 14

// let str = "Hire the top 1% freelance developers";
// let stringarr = str.split(" "); 

// console.log("Array is: ", stringarr);

// Output:= ['Hire', 'the', 'top', '1%', 'freelance', 'developers']

//Program : 15

// let arr = ['5',32,'Taksh']

// let string = arr.join();

// console.log(string);

// Output := 5 , 32 , Taksh

