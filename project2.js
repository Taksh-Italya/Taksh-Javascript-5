//1 Enter Electricity Unit and Calculate amount to pay.

// let unit = Number(prompt("Enter Electricity Consumption in Units !:"));
// let bill = 0;
// if (unit >= 0 && unit <= 50){
//     bill = unit * 1;
// }else{
//         if (unit <= 150){
//             bill = (50 * 1) + ((unit - 50) * 2);
//         }
//         else if (unit <= 250){
//             bill = (50 * 1) + (100 * 2) + ((unit - 200) * 3);
//         }
//         else if (unit >= 250){
//             bill = (50 * 1) + (100 * 2) + (100 * 3) + ((unit - 250) * 4);
//         }
//         else {
//             console.log("Invalid input. enter for units.");
//         }
//     }
// if (unit > 150){
//     bill += (bill * 0.20); 
// }
// console.log("Total Electricity Bill  is: ₹" + bill);

//2 write a javascript program to print season accroding user input using switch case.

// let season, chioce;
// chioce = prompt("enter your chioce !!")
// switch (chioce) {
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//         console.log("Winter");
//         break;
//     case "5":
//     case "6":
//     case "7":
//     case "8":
//         console.log("Summer");
//         break;
//     case "9":
//     case "10":
//     case "11":
//     case "12":
//         console.log("Monsoon");
//         break;
//     default:
//         console.log("Invalid Season")
//         break;
// }

//3 write a javascript program to find rate based on year and calculate total intrest using nested if.

// let amount, years;

//     amount = prompt("enter amount",amount);
//     years = Number(prompt("enter year",years));
//     let rate;

//     // Nested if conditions to determine the interest rate based on the number of years

//     if (years > 3 && years <= 5) {
//             rate = 3;
//     } else if (years > 5 && years <= 8) {
//         rate = 5;
//     } else if (years > 8 && years <= 12) {
//         rate = 12;
//     } else {
//         rate = 15;
//         }
        
//     let interest = (amount * rate * years) / 100;
//     console.log("Principal: " + amount);
//     console.log("Rate: " + rate + "%");
//     console.log("Years: " + years);
//     console.log("Total Interest: " + interest);


//4 write a javascript program to check voting eligibility.

// let age;
// age = prompt('Enter your age');
// if (age >= 18) {
//     console.log(" eligible for vote yeeeeeee..... ");
// }
// else {
//     console.log("person is not valid !");
// }

//5 write a javascript program to classify age groups.

// let groups;
// groups = prompt("enter your age :",groups);

// if( groups >=0 && groups <=13){
//     console.log('Your Cate category is child !');
// }
// else if( groups >=13 && groups <=18){
//     console.log('Your Cate category is teenager !');
// }
// else if( groups >=18 && groups <=39){
//     console.log('Your Cate category is Younger !');
// }
// else if( groups >=39 && groups <=69){
//     console.log('Your Cate category is older !');
// }


