function myFunc(y) {
    return function(x) {
        //return x power y
        return Math.pow(x,y)
    }
    
}

square = myFunc(2);
console.log(square(3)); //ans-9