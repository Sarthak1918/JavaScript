//ERROR HANDLING

const url = 'https://jsonplaceholder.typicode.com/postss' //here the url is wrong so error must be occured
const xhr = new XMLHttpRequest()
xhr.open("GET", url);
xhr.onload = () => {
    //to handle errors we can use status codes.

    if (xhr.status > 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.response));
    }
    else {
        console.log("something went wrong");
    }

}

//suppose there is an network error.We can handle it using error
xhr.onerror = () => {
    console.log("newtwork error");
}

xhr.send();