//how to sort numbers array

const arr = [12,3,34,5667,1,89]

arr.sort((a,b)=>{
    return a-b;    //it sort in ascending order
})

console.log(arr);


//how it works
//a-b ----> positive (or a> b) -----> change to ---> b , a
//ex=12,3
//12-3 = 9 -----. 3 , 12

//a-b ----> NEGATIVE (OR a<b) -------> change to ----> a , b


const arr2 = [12,3,34,5667,1,89]

arr2.sort((a,b)=>{
    return b-a;    //it sort in ascending order
})

console.log(arr2);