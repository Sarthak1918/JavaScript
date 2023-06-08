const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1"
const value2 = "myvalue2"

//we need to make obj like following
// let obj = { 
//     objkey1: 'myvalue1', 
//     objkey2: 'myvalue2' 
// }

const obj = {
    [key1] : value1,
    [key2] : value2
};

console.log(obj);

// or

const obj1 = {}

obj1[key1] = value1
obj1[key2] = value2
console.log(obj1);




