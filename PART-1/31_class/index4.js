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
    constructor(name,age,speed){
        super(name,age);          //invoke the constructor of Parent/Super class i.e Animal
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph speed`
    }
}

let tommy = new Dog("tomy",2,13);
console.log(tommy.run());




