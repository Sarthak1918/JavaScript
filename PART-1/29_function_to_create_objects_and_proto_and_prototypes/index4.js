// const userMethod={
//     about: function(){
//         console.log(`name is ${this.name} and age is ${this.age}`);
//     },
    
//     is18 : function() {
//         return this.age>=18;
//     }
//     }
    
//       function createUser(name,age){
//         const user = Object.create(userMethod)
//         user.name = name
//         user.age = age
//         return user;
//       }
    
//       let user1 = createUser("Mohit",34)
//       user1.about()
    
    
//OR

const userMethod={
    about: function(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    },
    
    is18 : function() {
        return this.age>=18;
    }
    }
    
      function createUser(name,age){
        const user = {}
        user.__proto__ = userMethod
        user.name = name
        user.age = age
        return user;
      }
    
      let user1 = createUser("Mohit",34)
      user1.about()
    
    

      //When we set the __proto__ of the object it creates a chain between objects.
      //suppose we set proto of object1 as object2.SO if we read/access anything in object1 that is not present so it check its proto(object2) if it finds here then it print 