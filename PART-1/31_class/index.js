class CreateObject {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    about(){
        return `My name is ${this.name} and I am ${this.age} years old`
    }

    is18(){
        return this.age >= 18
    }
}

let user1 = new CreateObject("Sarthak",19)
console.log(user1);
console.log(user1.about())
console.log(user1.is18())

let user2 = new CreateObject("Shagun",29)
console.log(user2);
console.log(user2.about())
console.log(user2.is18())