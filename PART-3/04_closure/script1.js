//Closure
//Its a future value that we dont have yet.
//Suppose we promised someone that we cook fried rice.for that we need to have all the ingridient
//bucket = ["coffee","chips","salt","rice","vegetable"]
//when we promise someone the state of the promise is --->unfulfilled
// and the value -------------------> undefined
//if we got the ingredients("salt","rice","vegetable") then we make the fried rice.Now the promise is fullfiled
// and we got the value(here fried rice)
//suppose if we dont have any ingredients then it will not be fulfilled and the value remains undefined


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