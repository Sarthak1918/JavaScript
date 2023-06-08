function myfunc(){
   return function(){
         return "hello";
     }
    
 }
 
 let ans = myfunc();
 console.log(ans());