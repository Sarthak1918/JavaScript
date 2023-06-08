//var-->function scope/global scope(its accesessible from anywhere)
//let,const - block scope (it can be accessible only within the block where it is declared)

//lexical scope - means the environment or the scope where the member is declared
//for Example

function myApp() {
    let value = 6;
    function myApp2() {
        console.log("inside myApp2");
        function myApp3() {
            console.log("inside myApp3");
        } 
        myApp3()
    }
    myApp2()
}
myApp()