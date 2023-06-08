class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    eat(){
        return `${this.name} is eating`
    }
}

class Dog extends Animal{

}

const tommy = new Dog("Tommy",4) //since Dog extends Animal class it can  use the constructor of Animal as it does not have its own
console.log(tommy);
console.log(tommy.eat())

