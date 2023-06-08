function createUser(name, age) {
    const user = Object.create(createUser.prototype)
    user.name = name
    user.age = age
    return user;
}
createUser.prototype.about = function () {
    console.log(`name is ${this.name} and age is ${this.age}`);
}

createUser.prototype.is18 = function () {
    return this.age >= 18;
}


let user1 = createUser("Mohit", 34)
user1.about()
