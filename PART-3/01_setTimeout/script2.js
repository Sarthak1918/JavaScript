console.log("START");
let id = setTimeout(() => {
    console.log("hello")
}, 3000)
console.log(id);
clearTimeout(id)    //clearTimeout stops the current running Timeout
console.log("END")

//check it on browser console