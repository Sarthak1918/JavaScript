//EVENT

//we can set attribute of the element as onClick="function name()"--> here we call it
//and here we can define the function
// function printHello(){
//     console.log("hello world");
// }

//or we can set the onClick here
// const btn = document.querySelector(".click-btn") 
// console.dir(btn);// in this representation we can see the onClick property is null
// btn.onclick = function print() {
    // console.log("hello");
// }

//BUT in above methods we can't assign click event more than once
//we can use addEvenetListener
// const btn = document.querySelector(".click-btn")
// btn.addEventListener("click", ()=>{
//     console.log("hello");
// })
// btn.addEventListener("click", ()=>{
//     console.log("hello world");
// })


//NOTE
//if we create normal function inside addEventlistner then value of "this" will be the element calling the functin
//but incase of arrow function it will be one level up


