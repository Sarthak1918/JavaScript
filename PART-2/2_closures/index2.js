//EXAMPLE-2

function hello(x) {
    const a = "A"
    const b = "B"

    return function(){
        console.log(a,b,x)
    }
}
const func = hello("X");
func()