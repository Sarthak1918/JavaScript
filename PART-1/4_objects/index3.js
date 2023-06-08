//how to iterate objects

const person = {
    name : "Sarthak",
    age : 12,
    hobbies : ["cooking","singing"]
}

// for(const e in person) {
//    console.log(e);            //it gives the keys of the object
// }

// for(const e in person) {
//        console.log(person[e]);   //it gives the values of keys of the object
//     }



// for(const key in person){
//     console.log(`${key} : ${person[key]}`);
// }

// or

// for(const key in person){
//     console.log(key," : ",person[key]);
// }


//OBJECT.KEY method

// console.log(Object.keys(person)); //it returns an array containing name of the keys

//using for-of loops with OBJECT.KEYS
// for(const key of Object.keys(person)){
    // console.log(key); //it prints keys.
    // console.log(person[key]); //it prints the values
    // console.log(key ," : ", person[key])
// }


//for of loop used in Arrays
//for in loop used in objects