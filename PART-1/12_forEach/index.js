// let arr = [2,3,4,5];

// for each takes a callback function.
// arr.forEach((element,index) => {  //its upto use wheather we pass index or not
//     console.log(element*2,index);
// });


let array = [2,3,63,8,20];

// function IsEven(element,index){
//     if (element%2 === 0) {
//         console.log(true,index);
//     }else{
//         console.log(false,index);
//     }
// }
// array.forEach(IsEven);    //we can pass functions

array.forEach((element,index)=>{   //or we can pass and declared function in the same time
    if (element%2 === 0) {
        console.log(true,index);
    }else{
        console.log(false,index);
    }
})

