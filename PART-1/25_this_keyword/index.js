function myfunc(){
    console.log(this) 
}

myfunc()  // it returns window object because the myfunc function is inside Window object
//is same as
window.myfunc() 
