class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    eat(){
        return `${this.name} is eating`
    }
}

let animal1 = new Animal("Panda",4);
console.log(animal1.eat())