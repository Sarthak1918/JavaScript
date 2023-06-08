let person1 = {
    name: "John",
    age: 30,
    about : function(){
      console.log(`name is ${this.name} and age is ${this.age}`);
    },
    is18 : function(){
        return this.age>=18;
    }
  }

  //suppose we want to create multiple objects of above type
  //we can create a function

  function createUser(name,age){
    let user = {}
    user.name = name
    user.age = age
    user.about = function(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
    user.is18 = function() {
        return this.age>=18;
    }

    return user;
  }

  let user1 = createUser("Mohit",34)
  console.log(user1.is18());
  user1.about();


  //but here there is a problem i.e. everytime we are creating the same function about and is18.
  //check index2.js for this solution