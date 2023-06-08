// let num1 = ["one","two","three"]
// let num2 = num1;
//since arrays are reference type if we change in num1/num2 it affects both num1 and num2
//CLONING MEANS WE WILL CREATE A ARRAY HAVING SAME VALUES OF ANOTHER BUT THEY CHANGING IN ONE SHOULD NOT AFFECT ANOTHER 

//METHOD-1(but we dont use this method)

// let num1 = ["one","two","three"]
// let num2 =  ["one","two","three"]
// console.log(num1===num2);
// num1.push("four")
// console.log(num1);
// console.log(num2);

//METHOD-2

// let num1 = ["one","two","three"]
// let num2 = [].concat(num1) //it contains the same values
// let num2 = num1.concat(["four"]) //it contains the values of num1 and different values too
// console.log(num2);

//method-3(slice)
let color1 = ["red","blue","green"]
let color2 = color1.slice(0); //it contains the same values of color1
// let color2 = color1.slice(0).concat(["yellow","maroon"]) it contains the values of color1 and different values too
console.log(color1);
console.log(color2);




//USING SPREAD OPERATOR

// let num2 = [...num1] //it has the same values as num1
// let num2 = [...num1,"four"] //it has values if num1 aswell as some other values that doesnot affect num1
    //or
//    
// console.log(num2); 