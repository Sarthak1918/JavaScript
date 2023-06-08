//suppose here we want that a = 1 , b = 2 , c will be an array of rest elements
function show(a,b,...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`,c);
}
show(1,2,3,5,6,7,8)

//suppose we want to add the numbers having any no of arguments
function add(...numbers) {  //rest parameter
    let sum = 0;
    for(number of numbers){
        sum = sum + number;
    }
    return sum;
}

let ans = add(1,2,3,4,5,34,67,889)
console.log(ans);

