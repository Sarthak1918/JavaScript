//SUPPOSE WE WANT TO CREATE A NEW ARRAY AND OF LENGTH 10 AND FILL EVERY ELEMENT AS -1
let myArray = new Array(10).fill(-1);
console.log(myArray);

let array = [1,2,3,4,5];
//suppose we want to change 2,3,4 ---> 0,0,0

array.fill(0,1,4); //it affects original array.
console.log(array); 