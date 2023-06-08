const url = 'https://jsonplaceholder.typicode.com/posts'
function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject("something went wrong")
            }
        }
        xhr.send()
    })
}

sendRequest("GET", url)
    .then((response) => {
        let data = JSON.parse(response)
        return data
    }).then((data) => {
        let id = data[9].id
        return id
    }).then((id) => {
        let newURL = `${url}/${id}`
        return sendRequest("GET", newURL)
    }).then((newresponse) => {
        console.log(JSON.parse(newresponse));
    }).catch((error) => {
        console.log(error, "occured");
    })