const color = ["red", "blue", "green", "yellow"]
//Suppose we want to assign a color array's first values index to a variable.How can we do that using basic approach;
// let value1 = color[0];
//let value2 = color[1];......
//we can easily do it by Array Destructuring.


// let[value1,value2]=color; // first 2 values of color array will be assigned to value1 and value2


//supoose we want to store 3rd index's value(green) in value2(even if we have 2 elements how to assign the third index value)
// let [value1, ,value2] = color
// console.log(value1);
// console.log(value2);

//suppose we want to create an array of green and yellow and assign to a new destructured array
// let newArr = color.slice(2)
let [value1, value2, ...newArr] = color; //...newArr --> here the rest opearator assign the rest values of color array(i.e green and yellow) to a new array called newArr 
console.log(value1)
console.log(value2)
console.log(newArr)









