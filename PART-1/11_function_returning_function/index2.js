function myfunc(){
    function Hello(){
         return "hello";
     }
     return Hello;
 }
 
 let ans = myfunc();
 console.log(ans());