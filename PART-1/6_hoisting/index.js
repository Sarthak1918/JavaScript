//hoisting
//is the process where interpreter appears to move the declaration to the top of code

hello();
function hello() {
    console.log("hello");
}
//ONLY NORMAL FUNCTION ALLOWS HOISTING BUT NEITHER FUNCTION EXPRESSION NOR ARROW FUNCTION ALLOWS HOISTING

a=10;
console.log(a);
var a;
//in only var case the declaration appears to be went to the top of the code before exection
//in let or const it does not work