// differece between dot and bracket notation


// const person = {
//     name : "Sarthak",
//     age : 12,
//     hobbies : ["cooking","singing"]
// }

//suppose we want to write a dual-word key 

const person = {
    name : "Sarthak",
    age : 12,
    "person hobbies":["cooking","singing"]
}

//now suppose we want to access the "person hobbies"
//we cant do like person.person hobbies since space is not allowed
//we need to use bracket notaiton
console.log(person["person hobbies"])

//suppose we want to add a key and the name of the key from a variable
let key = "email";
//now we want to add key "email" using key variable

//if we do  like person.key or person["key"] then it will create a key of name "key"
person[key] = "sarthak123@gmail.com";
console.log(person);