//reference type
//used for real world data
//object store key value pairs
//objects dont have index

//ex

const person = {
    name : "Sarthak",
    age : 12,
    hobbies : ["cooking","singing"]
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);

//how to add new key value pair
person.gender="Male";
// or
person["dob"]=18;
console.log(person);

//Bracket Notation to access data from object
console.log(person["name"])
console.log(person["age"])
console.log(person["hobbies"])
console.log(person["gender"])


// IN OBJECTS THE KEYS ARE UNIQUE.IF WE TRY TO REPEAT A KEY THEN THE LATEST WILL UPDATE THE LATEST ONE
