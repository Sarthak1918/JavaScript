let arr = ["hello","abc","bcd","abcd","sarthak"];

// function isLength3(string){
//   if(string.length == 3){
//     return true;
//   }
//   return false;
// }
// let ans = arr.find(isLength3)

// we can also do it using arrow function.

// let ans = arr.find((string)=>string.length === 3)

console.log(ans);  //it gives only the first string it encountered that having length 3

//if you want to print every string having length 3 then we can use filter method
 let xyz = arr.filter((e)=>{
   return e.length==3;
})

console.log(xyz);

//WE CAN USE IT WHEN WE NEED TO FIND ANYTHING UNIQUE.
//EXAMPLE

let users = [
    {userID:1, name: "Sarthak", age : 23},
    {userID:2, name: "Harshit", age : 20},
    {userID:3, name: "Shivam", age : 20},
    {userID:4, name: "Harish", age : 27},
]

let result = users.find((user)=>{return user.userID==1});
console.log(result);