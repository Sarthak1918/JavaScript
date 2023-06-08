let fruits = ["apple","grapes","mangoes"]
console.log(fruits);
//ARRAYS ARE MUTABLE THAT MEANS WE CAN CHANGE THE EXISTING ARRAY

fruits[1]="banana"
console.log(fruits);

//PUSH,SHIFT,UNSHIFT
//PUSH- add an element at the end of the array

fruits.push("oranges")
console.log(fruits);
//SHIFT- remove the first element of the array
fruits.shift();
console.log(fruits);
//UNSHIFT- add an element at the beginning of the array
fruits.unshift("Guava")
console.log(fruits);

//to check if something is a array or not
console.log(Array.isArray(fruits))