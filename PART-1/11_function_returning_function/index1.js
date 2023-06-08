function myfunc(){
   function Hello(){
        console.log("hello");
    }
    return Hello;
}

let ans = myfunc();
ans();