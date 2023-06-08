// let headings = document.querySelectorAll("h1")
// console.log(headings);


//setTimeout
// for (let i = 0; i < headings.length; i++) {
//     setTimeout(() => {
//         const element = headings[i];
//         element.textContent = "Changed"
//     }, 1000 * i)

// }


//setInterval
// let i = 0
// const id = setInterval(() => {
//     if (i >= headings.length) {
//         return clearInterval(id)
//     }
//     console.log(i);
//     headings[i++].textContent = "changed"
// }, 1000);


//CALLBACK HELL

let heading1 = document.querySelectorAll("h1")[0];
let heading2 = document.querySelectorAll("h1")[1];
let heading3 = document.querySelectorAll("h1")[2];
let heading4 = document.querySelectorAll("h1")[3];
let heading5 = document.querySelectorAll("h1")[4];
let heading6 = document.querySelectorAll("h1")[5];
let heading7 = document.querySelectorAll("h1")[6];

// setTimeout(() => {
//     heading1.textContent = "one"
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "two"
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "three"
//             heading3.style.color = "red"
//             setTimeout(() => {
//                 heading4.textContent = "four"
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "five"
//                     heading5.style.color = "green"
//                     setTimeout(() => {
//                         heading6.textContent = "six"
//                         heading6.style.color = "blue"
//                         setTimeout(() => {
//                             heading7.textContent = "seven"
//                             heading7.style.color = "brown"
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000)


//PYRAMID OF DOOM

// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {

//     setTimeout(() => {
//         if (element) {
//             element.textContent = text;
//             element.style.color = color;
//             if (onSuccessCallback) {
//                 onSuccessCallback()
//             }
//         }
//         else {
//             if (onFailureCallback) {
//                 onFailureCallback()
//             }
//         }
//     }, time)
// }

// changeText(heading1, "one", "violet", 1000, () => {
//     changeText(heading2, "two", "purple", 2000, () => {
//         changeText(heading3, "three", "red", 2000, () => {
//             changeText(heading4, "four", "pink", 1000, () => {
//                 changeText(heading5, "five", "green", 2000, () => {

//                 }, () => { console.log("heading 5 doesnot exist"); })
//             }, () => { console.log("heading 4 does not exist") })
//         }, () => { console.log("heading 3 does not exist") })
//     }, () => { console.log("heading 2 does not exist") })
// }, () => { console.log("heading 1 does not exist") })



//how to solve it using promise

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve()
            }
            else {
                reject()
            }
        }, time)
    }
    )
}
changeText(heading1, "one", "red", 1000)
    .then(() => {
        return changeText(heading2, "two", "blue", 1000)
    })
    .then(() => {
        return changeText(heading3, "three", "green", 1000)
    })
    .catch(error => {
        console.log(error);   //even if there is any problem in 1st promist(heading1 wala code) then it will not resolve the following and direct goes to catch
    })
