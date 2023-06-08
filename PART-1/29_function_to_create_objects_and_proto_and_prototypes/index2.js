const userMethod={
aboutfunc: function(){
    console.log(`name is ${this.name} and age is ${this.age}`);
},

is18func : function() {
    return this.age>=18;
}
}

  function createUser(name,age){
    let user = {}
    user.name = name
    user.age = age
    user.about = userMethod.aboutfunc  //here we just passed the reference of the function.SO every newly created object wil use the same function
    user.is18 = userMethod.is18func
    return user;
  }

  let user1 = createUser("Mohit",34)
  user1.about();
  let user2 = createUser("Rohit",40)
  user2.about();



  //Here we created an object of methods and give reference of it to all the users created.

  //BUT HERE THERE ARE PROBLEMS
  //suppose we want to add more methods in userMethod object but if we add there we also write inside the function too
  //it may happen that we may forget to write any method
  //for this solution check index3.js