console.log("Script Start");


const bucket = ["coffee", "chips", "salt", "rice", "vegetable"]

const myFriedricePromise = new Promise((resolve, reject) => {
    if (bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetable")) {
        resolve("Fried rice")
    }
    else {
        reject("No ingredients")
    }
})

myFriedricePromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


setTimeout(() => {
    console.log("hello World");
}, 2000);

for (let i = 0; i < 10; i++) {
    let a = Math.floor(Math.random() * 20)
    console.log(a);
}
console.log("Script End");


//Let understand How the above code works?
