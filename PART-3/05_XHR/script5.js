//fetch API

const url = 'https://jsonplaceholder.typicode.com/postsss'
// let whatisthis = fetch(url)
// console.log(whatisthis);  //its a promise
fetch(url).then((response) => {
    // console.log(response.json()); //this response.json() also returns a promise so we can return it to what resolve value it is giving
    // return response.json()

    //if there is any error in the url or any issue then we can handle it here bu using "ok" property
    //ok : false --> there is some issue
    //ok : true  --> not any issue
    if (response.ok) {
        return response.json()
    }
    else {
        throw new Error("Something went wrong") //here it will print it and also go to catch zone
    }
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error, "occured inside catch"); //this error will be caputure only the newtwork related errors
})