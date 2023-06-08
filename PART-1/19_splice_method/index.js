// splice //it deletes,insert, delete-insert together and returns the deleted elements.
//startindex , delete count(how many elements you want to delete) , insert element(insert elements where you delete)

let arr = [10,20,30,60,70]
//insert
// arr.splice(3,0,40,50); //start fron 3rd index,we want 0 elements deleted , insert 40 50
// console.log(arr);

//delete
// arr.splice(2,2)  //start from index 2 and deletes 2 elements.
// console.log(arr);

//insert-delete together
let deleted = arr.splice(3,2,100,200,300); 
console.log(arr);
console.log(deleted);


