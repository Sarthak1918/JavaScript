const url = 'https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest()
// console.log(xhr);
// console.log(xhr.readyState); //readystate - 0(before open)
xhr.open('GET',)
// console.log(xhr.readyState); //readystate - 1(after open)

// xhr.onreadystatechange = function () {  //readyState property describes the loading state of the document . When the value of this property changes, a onreadystatechange event fires on the document object.
//     if (xhr.readyState === 4) {         //readyState-4 ->DONE	The operation is complete.
//         let response = xhr.response  //but this is not in JSON format.it is a string.so we need to convert this string to JSON
//         let data = JSON.parse(response)
//         console.log(data);
//     }
// }

//but there is a function i.e. onload which runs when the status code changed to 4.
xhr.onload = function () {
    // console.log(xhr.readyState); //readyState-4
    console.log(JSON.parse(xhr.response));
}
xhr.send();
