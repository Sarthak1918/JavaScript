// function hello() {
//     console.log("hello world");
// }
// hello.call(); // same as hello()

let obj1 = {
    name: "John",
    age: 30,
    about : function() {
        console.log(this.name + " is " + this.age + " years old.");
    }
}

let obj2 = {
    name: "Mark",
    age: 44,
}

//HERE obj2 doesnot have  about function but we can call it through obj1(since it has the function) using call()

obj1.about.call(obj2); //here we set "this" of the function as obj2
