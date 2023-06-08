let array1 = [2,4,22,10];
let array2 = [2,4,22,11];
let ans = array2.every((number)=>number%2 === 0)  //IT CHECKS EVERY NUMBER WHEATHER IT IS EVEN OR NOT AND RETURNS EITHER TRUE OR FALSE.
console.log(ans);


//EX-2

let users = [
    {userID:1, name: "Sarthak", age : 23},
    {userID:2, name: "Harshit", age : 20},
    {userID:3, name: "Shivam", age : 20},
    {userID:4, name: "Harish", age : 22},
]

let res = users.every((user)=>{
    return user.age < 25;
})

console.log(res);