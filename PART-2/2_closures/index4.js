function func(){
    let x = 1;
    return function(){
        if(x>1){
            console.log("Already Called")
        }
        else{
            console.log("Hi,You Called Me!!");
            x++;
        }
    }
}

let ans = func()
ans()
ans()

let ans2 = func()
ans2()
ans2()