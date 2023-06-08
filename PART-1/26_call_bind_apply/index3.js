//DONT MAKE THIS MISTAKE

let person1 = {
  name: "John",
  age: 30,
  about : function(){
    console.log(`name is ${this.name} and age is ${this.age}`);
  }
}

// person1.about() //it will print the correct output

// but
// const myFunc = person1.about 
//myFunc()                          //HERE it will give name and age as undefined because we are just storing the reference of function not calling it via person1 and then we are calling it so "this" refers to window object

//we can do like below
// person1.about.call(person1)
let myFunc = person1.about.bind(person1) //Here we bind the function and set "this" as person1 so it prints correct output
myFunc()
