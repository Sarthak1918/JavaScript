//setTimeout
//setTimeout is a webAPI handled by the browser.Check the below example

console.log("Start")  //-----(1)
setTimeout(() => {     //------(2)
    console.log("Hello");
}, 1000) //1000 ms = 1 sec

console.log("End")    //-------(3)

//In the above code
//when js load it First GEC will be created
//then the (1) line will be run and print "Start"
//then the setTimeout will be handled by WebAPI.It will wait and hold the funtion for the given amount of time.this time is the minimum time we want to hold the function
//now until then the other part of the the code will run.
//now the (3) will be printed
//after all the remaining code completely run then the webAPI send the callback function to the callback Queue
//now there is a event loop that checks wheather the call stack is free or not
//since here all the code is being completely run now the callback function will be gone to call stack and call it
//then "HEllO" will be printed


//NOTE---> even if the given time is 0ms the setTimeout function will be run after all the code being executed
//    ---> the setInterval also returns a id which we can use for stopping it.example in script2.js



