//same method in child class

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

    eat(){
        return `modified eat`
    }
}

let tommy = new Dog("tomy",2,13);
console.log(tommy.eat());        //first it checks in Dog class if it finds then return otherwise go to parent class and print




