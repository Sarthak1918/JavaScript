let array2 = [1,33,17,12];
//some method returns true even if the condition will be true for one element

let ans = array2.some((num)=>num%2==0)
console.log(ans); //true because 12 is even