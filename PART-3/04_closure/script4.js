//function returning promise

function friedRicePromise() {
    const bucket = ["coffee", "chips", "salt", "rice", "vegetable"]
    return new Promise((resolve, reject) => {
        if (bucket.includes("rice") && bucket.includes("salt") && bucket.includes("vegetable")) {
            resolve("Fried rice")
        }
        else {
            reject("No ingredients")
        }
    })
}

friedRicePromise().then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})