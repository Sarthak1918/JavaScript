//Object.create
//for example

let obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// let obj2 = {
//     key3 : "value3"
// }

//here suppose we want to access key1  in object2 but its not there so we cant
//We want do something like if we dont get the value1 in obj2 then check obj1 if it is there then print it

let obj2 = Object.create(obj1)
console.log(obj2)
obj2.key3 = "value3"
console.log(obj2.key3)
console.log(obj1.key1)
console.log(obj2)  

//how it is doing that
//because in obj2 it has "__proto__" or "[[prototype]]"" as an Object"(to check this past the code in Google console)
//and inside that we have values of key1 and key2

console.log(obj2.__proto__) //{ key1: 'value1', key2: 'value2' }


