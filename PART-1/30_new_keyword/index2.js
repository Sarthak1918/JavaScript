// EXAMPLE

function createUser(name, age) {
    this.name = name
    this.age = age
}
createUser.prototype.about = function () {
    console.log(`name is ${this.name} and age is ${this.age}`);
}

createUser.prototype.is18 = function () {
    return this.age >= 18;
}


let user1 = new createUser("Mohit", 34)
// console.log(user1);
// user1.about()

//Suppose we want to see the keys/properties of the object
for(key in user1){
    // console.log(key); //it prints its own property as well as properties which are in proto
    //suppose we want to print only its own proprties

    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}