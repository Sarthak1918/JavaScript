let section = document.querySelector(".MainSection")
// console.log(section.innerHTML);
// section.innerHTML += "<span>NEW ELEMENT</span>"
// console.log(section.innerHTML);
// section.innerHTML += "<button>new-btn</button>"
// console.log(section.innerHTML);


//IN THIS WAY WE CAN CREATE AND ADD HTML ELEMENTS BUT IT IS NO THE PREFFERED WAY TO DO SO BECAUSE EACH AND EVERY TIME JS IS RENDERING EVERY ELEMENT

let newSpanElement = document.createElement("span")  //ELEMENT CREATED
// let newSpanElementText = document.createTextNode("new span element") //TEXT CREATED FOR ELEMENT
// newSpanElement.appendChild(newSpanElementText) //APPEND TEXT TO ELEMENT
newSpanElement.textContent = "new Span Element appended" //we don;t need to do the above 2 steps. we can do it by this line
section.append(newSpanElement) //APPEND ELEMENT AT THE END OF SECTION

//prepend-->add child at beginning
let newSpanElement2 = document.createElement("span")  //ELEMENT CREATED
newSpanElement2.textContent = "new Span element prepended" 
section.prepend(newSpanElement2)



//remove
// const para = document.querySelector(".para")
// para.remove(para)
// console.log(section.innerHTML);


//before--->append the element before main-section(for example)
let newPara = document.createElement("p")
newPara.textContent = "NEW PARA NEW PARA NEW PARA"
section.before(newPara)




//after
let newPara2 = document.createElement("span")
newPara2.textContent = "NEW PARA2 NEW PARA2 NEW PARA2 NEW PARA2 NEW PARA2"
section.after(newPara2)


