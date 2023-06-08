//getElementById
// console.log(document.getElementById("main-heading"));

//querySelector->like css selector
// console.log(document.querySelector("#main-heading"))
// console.log(document.querySelector(".nav-item")) //Evenif there are multiple elements with same class name it selects only the first element with the given class name
// console.log(document.querySelectorAll(".nav-item"))//it returns all the elements with the given class name returns"NODE LIST"
// console.log(document.querySelectorAll(".nav-item")[1])//it returns 2nd element with the given class name.
//console.log(document.querySelector("h1"))//like getElementByTagName //

//getElementByClassName
// console.log(document.getElementByClassName("nav-item")) //it selects only the first element with the given class name
// console.log(document.getElementsByClassName("nav-item")) //same as querySelectorALL but gives "HTML COLLECTION"
// console.log(document.getElementsByClassName("nav-item")[0]) //selects only the first element with given class

//getElementByTagName
// console.log(document.getElementsByTagName("h1"))

//By the way you can also store this element inside an variable and use it accordinglu
// const header = document.getElementById("main-heading")
// console.log((header));


//innerText 
// const MainHeading  = document.getElementById("main-heading")
// console.log(MainHeading.innerText) //gives text contain by only "main-heading" 

//textContent
// console.log(MainHeading.textContent)//gives text contain by all the elements inside "main-heading"
// MainHeading.textContent = "hello World" // here the span element hello will be removed
// console.log(MainHeading.textContent)


//innerHTML
// console.log(MainHeading.innerHTML)//gives the HTML elements(if contains.if it contains only text then we can change the text using this method also)
// MainHeading.innerHTML = "<span>HELLO HTML</span>"
// MainHeading.innerHTML += "<button>new btn</button>"
// console.log(MainHeading.innerHTML);

//CHANGIN STYLE OF ELEMENTS

// MainHeading.style.color="red"
// MainHeading.style.backgroundColor = "orange"   //properties that have "-" in between like background-color written as backgroundColor
// MainHeading.style.fontSize="30px"
// MainHeading.style.fontWeight="bold"
// MainHeading.style.textDecoration="underline"
// MainHeading.style.textTransform="uppercase"

//Get and Set Attribute
//attributes are ex- id,class,type,name,etc

// const link = document.querySelector("a")

// console.log(link.getAttribute("href")); //empty 
// console.log(link.setAttribute("href","#home")); //value set/change
// console.log(link.getAttribute("href"));


//ITERATE ELEMENTS
// let elements = document.getElementsByTagName("a")
// console.log(elements); //HTML Collection
//ARRAY LIKE OBJECTS-->length,indexing use kar sakte hain
//HERE WE CAN ITERATE ELEMENT USING
//simple for loop
//for of loop
//WE CAN'T USE forEach LOOP

// for(let i=0; i<elements.length;i++){
    // console.log(elements[i]);
//     elements[i].style.backgroundColor = "green";
// }

// for(let element of elements){
    // console.log(element);
//     element.style.backgroundColor = "green";

// }


//BUT WE CAN CONVERT THIS HTML COLLECTION TO ARRAY
// let arr = Array.from(elements);
//now we can use for each loop here
// arr.forEach(element => {
//     element.style.backgroundColor = "red"
// })



// let navItems = document.querySelectorAll("a")
// console.log(navItems);//NODE LIST
//WE CAN USE 
//SIMPLE FOR LOOP
//for of loop
//forEach LOOP

// navItems.forEach(element => {
//         element.style.backgroundColor = "red"
//     })



//CLASSLIST
// let section = document.getElementsByTagName("section")[0]
// console.log(section.classList);
// section.classList.add("container-2");
// console.log(section.classList);
// section.classList.remove("container-2");
// console.log(section.classList);
// console.log(section.classList.contains("container"))
//classList.toggle("abc")//if there is class abc then remove it.If it is not there then add it


