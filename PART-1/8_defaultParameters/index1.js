//Suppose we want to add two numbers.passing two numbers but if we pass one value then how to handle the other one

//traditional way
// function addtwoNum(a,b){
//     if(b===undefined){
//         b = 1;
//     }
//     console.log(a+b);
// }

//modern way
function addtwoNum(a,b=1){  //default value of b is 1
    console.log(a+b);
}

addtwoNum(4);