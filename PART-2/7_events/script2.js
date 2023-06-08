const allButtons = document.querySelectorAll(".btn")
// for (const button of allButtons) {
//     button.addEventListener("click", function () {
//         console.log(this);
//         console.log(this.textContent);
//     })
// }

//we can't do this bt arrow function.but we can do the same think by using event object

for (const button of allButtons) {
    button.addEventListener("click",(event)=>{
        // console.log(event);//prints all the information about the event
        console.log(event.target); //same as "this"
        console.log(event.target.textContent);
    })
}