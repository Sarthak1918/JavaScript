//SPREAD OPERATOR IN OBJECT

// REVISION OF SPREAD OPERATOR IN ARRAY
// let arr1 = [12,34,56,112]
// let arr2 = [23,34,56,32]

// let newArr = [...arr1,...arr2,34,54]
// console.log(newArr);

// const newArr = [..."abc"] //it spreads the string['a','b','c'].only strings allower here
// console.log(newArr);


//SPREAD OPERATOR IN OBJECT
// const obj1 = {
//     key1 : "1value1", 
//     key2 : "1value2",
//     key3 : "1value3" 
// }

// const obj2 = {
//     key3 : "2value3", 
//     key4 : "2value4"
// }


// const newobj = {...obj1,...obj2}
// const newobj = {...obj1,...obj2, key5 : "value5"}
// console.log(newobj);


const newOBJ = {..."abc"} //{0:'a',1:'b',2:'c'}
console.log(newOBJ);

const newOBJ2 = {...["value1","value2","value3"]} //{0:"value1",1:"value2",2:"value3"}
console.log(newOBJ2);