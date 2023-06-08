//object destructuring(storing values of objects directly)

const jeans = {
    color: "blue",
    price: "1300",
    brand: "Pepe Jeans",
    type : "baggy"
}

//this way we can do but we use different approach
// let jeansColor = jeans.color;
// console.log(jeansColor);

// let {color , price} = jeans; //in object destructuring the variable name must be same as key but we can change it using next method
// console.log(color,price);

// let {color : jeansColor , price : jeansPrice} = jeans;
// console.log(jeansColor,jeansPrice);

//suppose we want to store the rest properties(brand,type)

let{color,price,...rest} = jeans;
console.log(rest);

