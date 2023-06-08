//Example-1

function printFullName(firstName,lastName) {
    //from line 4 to 8 ->it is the lexical scope/environment of Print() function and here both firstName and lastName is accessible as they are present in the local memory of this function.
    function Print() {                           //IN PRINT WE DONT HAVE ANY VARIABLE FIRSTNAME AND LASTNAME BUT STILL WE CAN PRINT HERE THAT BECAUSE OF CLOUSURE
        console.log(firstName,lastName);        //WHEN FUNCTION RETURNS IT RETURNS ALONG WITH ITS LEXICAL ENVIRONMENT.
    }
    return Print;
}
let ans = printFullName("John", "Doe");
ans();