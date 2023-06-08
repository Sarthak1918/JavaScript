let arr = [1,4,2,7];
const ans = arr.reduce((accumulator,current)=>{
    return accumulator+current;
})

console.log(ans);

//accumulator   current   return
//  1           4         5
//  5           2         7
//  7           7         14


//we can also provide initial value


let arr1 = [1,4,2,7];
const ans1 = arr.reduce((accumulator,current)=>{
    return accumulator+current;
},100)
console.log(ans1);


//REAL LIFE EXAMPLE

let Cart = [
    {productName:"Phone",price:12000},
    {productName:"Trimmer",price:1000},
    {productName:"KeyBoard",price:800},
]

//suppose we want to total the value of price
const total = Cart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+currentProduct.price;
},0)
console.log(total);