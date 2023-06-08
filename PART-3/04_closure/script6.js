//promise.resolve()
//promise chaining

// let newPromise = Promise.resolve(9) //it provides a resolved promise value.
// newPromise.then((value) => { console.log(value); })

//NOTE ---> then() also provides a resolved promise internally thats why we can  use promise chaining

function myPromise() {
    return new Promise((resolve) => {
        resolve(10)
    })
}

myPromise().then((value) => {
    console.log(value);
    value += 2;
    return value;   //internaly Promise.resolve(value)
}).then((value) => {
    console.log(value);
})