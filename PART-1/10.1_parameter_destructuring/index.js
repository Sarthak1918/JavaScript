//Mostly used in Object and React


let obj = {
    name: 'SP',
    age: 18,
}

function printDetails({name,age}) {   //here we known that the when the function will be called the argument will be obj having only these two keys
    console.log(name);
    console.log(age);
}

printDetails(obj)
