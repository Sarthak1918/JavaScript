let a1 = [4,1,78,759];
//let newArr = a1.slice(0).sort((a,b)=> a-b); //first we clone and then change in the cloned array
// let newArr = [...a1].sort((a,b)=> a-b);   
// let newArr = [].concat(a1).sort((a,b)=>a-b)
// console.log(newArr);


//REAL LIFE EXAMPLE
//array of objects.suppose this is a list of  product that a person searched.how to sort low to high and high to low accordig to price
let products = [
    {productID : 1, productName : "p1", price : 2000}, 
    {productID : 2, productName : "p2", price : 250}, 
    {productID : 3, productName : "p3", price : 8000}, 
    {productID : 4, productName : "p4", price : 120}, 
    {productID : 5, productName : "p5", price : 20}, 
]

console.log(products);

// product sorting LOW TO HIGH
let lowToHigh = [...products].sort((a,b)=>{   // we dont want that our products actual list changed so we clone the array
    return a.price-b.price ;
})

console.log(lowToHigh);

//product sorting  HIGH TO LOW 

let highToLow = [...products].sort((a,b)=>{   // we dont want that our products actual list changed so we clone the array
    return b.price-a.price ;
})

console.log(highToLow);