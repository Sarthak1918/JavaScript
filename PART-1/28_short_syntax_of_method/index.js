let person1 = {
    name: "John",
    age: 30,
    about(){
      console.log(`name is ${this.name} and age is ${this.age}`);
    }
  }

  person1.about()