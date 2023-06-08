// methods refers to the function inside an object


function printAbout() {
    console.log(`Person name is ${this.name} and age is ${this.age}`)
}
let person1 = {
    name: "John",
    age : 23,
    about : printAbout
}
let person2 = {
    name: "Mark",
    age : 29,
    about : printAbout
}

// person1.about()   //Here when it will call the printAbout function.in the function "this" will be person1
// person2.about()
