const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url).then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// })

async function myFetchRequest() {
    const response = await fetch(url)   //fetch() returns a promise so we can use "await" here.So it waits until it resolved and store the value in response 
    const data = await response.json() //response.json() also returns promise so we use await here then the resolved value stored in data
    return data;                       //it is also returned as a promise
}

myFetchRequest()
    .then((myData) => {
        console.log(myData);
    })
    .catch((error) => {
        console.log(error);
    })
