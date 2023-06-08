//map is like a object contains key-value pair
//difference between object and map is In Map the key can be of any type but in object mostly it is a string
//and Map is iterable
//order is same as given



// let number = new Map()
// number.set("name","Sarthak")
// number.set("age",20)
// number.set(45,"randomval1")
// console.log(number.keys()) //to get keys //it is map iterator that is iterable so we us for of to print keys

// for (const key of number.keys()) {
//     console.log(key,typeof key);
// }

//HOW TO PRINT 

// for (const [key,value] of number) {
//     console.log(key,value);
// }

//we can also create map like this
// let number = new Map([["name","Sarthak"],["age",19]])



//EXAMPLE
let person1 = {
    name : "Sarthak",
    age : 20
}

//suppose we want to store additional information about person1 but not in the object so we can use map

let extraInfo = new Map()
extraInfo.set(person1, {address : "Bombay", gender : "Male" })

//now we can access the information
console.log(person1.name);
console.log(extraInfo.get(person1).gender)
    
