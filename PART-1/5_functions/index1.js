// function sayHello(){
//     console.log("hello");   //function
// }
// sayHello();

//function expression
//in function expression we store function in a variable and call it by calling variable
// const sayHello1 = function(){
//     console.log("hello");
// }
// sayHello();


// let sumOfTwo = function(a,b) {
//     return a+b;
// }

// let ans = sumOfTwo(4,6);
// console.log(ans);

//ARROW FUNCTION

let sayHello = () =>{
    console.log("hello");
}
sayHello();

//if there is only one parameter we can ignore ()

// ex
let printNum = a =>{
    console.log(a);
}
printNum(234);

//if inside the body of the function there is only one line of code i.e return statement then we can also remove { }

let printNum2 = num => num%2 === 0;
console.log(printNum2(50));


