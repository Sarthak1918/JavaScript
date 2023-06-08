//IF WE WANT TO RETRIEVE WHOLE DATA THEN RETRIEVE A SPECIFIC ONE
const url = 'https://jsonplaceholder.typicode.com/posts' //here the url is wrong so error must be occured
const xhr = new XMLHttpRequest()
xhr.open("GET", url);
xhr.onload = () => {
    //to handle errors we can use status codes.

    if (xhr.status >= 200 && xhr.status <= 300) {
        let data = JSON.parse(xhr.response);
        console.log(data);
        let id = data[9].id;
        console.log(id);
        const url2 = `${url}/${id}`
        console.log(url2);
        const xhr2 = new XMLHttpRequest()
        xhr2.open("GET", url2)
        xhr2.onload = () => {
            let data2 = JSON.parse(xhr2.response)
            console.log(data2);
        }
        xhr2.send()
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



//BUT IT MAKES A CALLBACK HELL.SO LETS PROMISIFY IT
