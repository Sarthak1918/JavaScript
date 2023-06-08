let person1 = {
    name: "John",
    age: 30,
    about : ()=>{
      console.log(`name is ${this.name} and age is ${this.age}`);
    }
  }

  //this can not be used in arrow function

  person1.about(); //it gives undefined undefined
  //this is because arrow function is not bound to the object
  let func = person1.about.bind(person1)
  func()                  // these do not work too.
  person1.about.call()
  person1.about.apply()