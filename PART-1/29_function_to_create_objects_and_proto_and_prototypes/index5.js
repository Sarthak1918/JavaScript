//prototypes are the empty objects provided by functions(only)

function hello() {
    console.log("HELLO");
}

console.log(hello.prototype)

hello.myOwnProperty = "my property"

//we can add our own properties
console.log(hello.myOwnProperty);