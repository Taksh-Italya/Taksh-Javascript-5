// if ,if else ,else if leader 

let a =100 , b = 220,c  = 15;
// if(a < b){
//     if(a < c){
//         console.log("value is smallest =",a);  
//     }
//     else{
//         console.log("smallest value is =",c);
//     }
// }
// else{
//     if(b < c){
//         console.log("small number is =",b);
//     }
//     else{
//         console.log("small is =",c);
        
//     }
// }

if(a < b && a < c){
    console.log("smallest no is =",a);
}
else if(b < c){
    console.log("small no is =",b);
}
else{
    console.log("smaller no is =",c);
}