//objects inside array

let users = [
    {id:1, name : "sarthak", age:21},
    {id:2, name : "Rahul", age:28},
    {id:3, name : "Mohit", age:20},
]

// for (const user of users) {
//     console.log(user);
// }

//here now we can also use array destructuring to store specific user details
// let[user1,user2] = users;
// console.log(user1);
// console.log(user2);

//NESTED DESTRUCTURING
//suppose here we want to create variables of specific user's specific property.we can do it via nested destructuring

// let[{name},{id},{age}]=users; //it stores name of 1st user,id of 2nd users and age of 3rd user
// console.log(name);
// console.log(id);
// console.log(age);

let[{name:firstUserName,id:firstUserId},{id},{age}]=users; 
console.log(firstUserId);
console.log(firstUserName);
console.log(id);
console.log(age);

