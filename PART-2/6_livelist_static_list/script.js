// const list = document.querySelectorAll(".myList li") //STATIC LIST
// console.log(list);
// const newLi = document.createElement("li")
// newLi.textContent = "newLI"

// let myUl = document.querySelector(".myList")
// myUl.append(newLi)
// console.log(list); //after appending a new element still the list is showing that it has only 4 element because it is static


const ul = document.querySelector(".myList") //STATIC LIST
const ulList = ul.getElementsByTagName("li")  //LIVE LIST
console.log(ulList);
const newLi = document.createElement("li")
newLi.textContent = "newLI"
let myUl = document.querySelector(".myList")
myUl.append(newLi)


console.log(ulList); //but it is showing that it has  5 element because it is live

