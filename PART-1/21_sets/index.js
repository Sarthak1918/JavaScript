// SETS
//iterable(made by iterables(array,string))
//sets have its own methods
//no guarantee of order(means it may not store elements in the order we give)
//so no index-based access
//Only unique elements(if you give duplicate values it ignore it)
//it can contain values if multiple data types

// const numbers = new Set([1,2,3,[12,45,77],"SArthak"])
// or
const items = ["item1","item2","item3"]
const numbers = new Set();
numbers.add(10);
numbers.add(20);
numbers.add("sarthak");
numbers.add(items);
// numbers.add(items);  not accepted because duplicate


//but if I add array using [] then even if both arrays contain same values both will be added to set
numbers.add([1,2,3]);
numbers.add([1,2,3]);

// console.log(numbers);


for(number of numbers){
    console.log(number)
}

//To check wheather the number is present inside set 
let ans = numbers.has(10)?"yes":"no";
console.log(ans)