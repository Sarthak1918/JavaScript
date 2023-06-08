// static methods,variables are accessed only through the class where they exist

class Person{
 static printHello(){
    console.log("Hello World");
 }

    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    printInfo(){
        console.log(`${this.name} ${this.age} ${this.city}`);
    }
}

let person1 = new Person("Sarthak",23,"Delhi")
person1.printInfo()
// person1.printHello() //not accessible
Person.printHello()
