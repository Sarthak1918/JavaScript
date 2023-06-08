// We can clone a object using object.assign

const obj1 = {
    name: 'John',
    age: 30
}
const obj2 = Object.assign({}, obj1);
// const obj2 = Object.assign({newKey : "newVal"}, obj1);
obj1.city = "delhi"
console.log(obj1);
console.log(obj2);