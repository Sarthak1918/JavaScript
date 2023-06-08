let obj = {
    name : "Sarthak",
    age : 21,
    // address : {houseNumber : 123, city: "Delhi"}
}

//suppose we dont have address property so we can not access it and it throws error
//but after some we may have address so we can handle this situation using optional chaining
//when we dont have the property using optional chaining we will get undefined instead of error

console.log(obj?.address?.houseNumber);