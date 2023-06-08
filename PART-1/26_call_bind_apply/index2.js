
function about(hobby,place) {
    console.log(`name-${this.name} age-${this.age} hobby-${hobby} place-${place}`);
}

let obj1 = {
    name: "John",
    age: 30,
}

let obj2 = {
    name: "Mark",
    age: 44,
}

// we can also do like this
// about.call(obj1,"guitar","Delhi");
// about.call(obj2,"reading","Hyd"); 

//APPLY
//same as above only the additional arguments(except the argumnent that decides "this" .HERE-hobby,place) are passed in an array
// about.apply(obj1,["guitar","Delhi"])

//BIND
// const func = about.bind(obj1,"guitar","delhi") //it returns a function
// func()
