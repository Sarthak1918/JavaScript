class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

   get fullName(){                                     //using get we can use full name like a property
        return `${this.firstName} ${this.lastName}` ; 
        }
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person1 = new Person("Sarthak","Panda")
console.log(person1.fullName) //if we dont use 'get' then we need call it by console.log(person1.fullName())

//we can change first name and last name by using the following methods
// person1.firstName = "Shiv"
// person1.lastName = "dogra"
//or
//we can create a function inside class as setName(firstName,lastName){ this.firstName = firstName; this.lastName = lastName}
//then we can call here
//person1.setName("Shiv","Dogra")


//But we want if we set Full name then the first and last name should change
person1.fullName="Shiv Dogra"
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);