//new keyword do the following 
//1)create an empty object
//2)add the key value pairs 
//3)link the object with proto

//EX-

function createUser(name,age){
    //not that here we have not create any new empty object and link with its prototype."new" do it itself ..that means it wil do like let obj2 = Object.create(createUser.prototype)
    this.name = name;
    this.age = age
}

const user1 = new createUser("sarthak",19)
console.log(user1)

//lets add some methods inside prototype of the function "createUser"

createUser.prototype.about = function() {
    console.log(`name is ${this.name} and age is ${this.age}`);
}

user1.about()



