//LETS MAKE THE TODO FUNCTIONALITY WORKING

let todoForm = document.querySelector(".form-todo")
let todoInput = document.querySelector("#todo-input")
let AddTodoBtn = document.querySelector(".form-todo .btn")
let todoItemList = document.querySelector(".todo-list")
// let doneBtn = document.querySelector(".done")
// let removeBtn = document.querySelector(".remove")
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newTodoItemText = todoInput.value
    let newLI = document.createElement("li")
    // console.log(newLI);
    // let BTNBOX = document.createElement("div")
    // let todoText = document.createElement("span")
    // let btnDONE = document.createElement("button")
    // let btnREMOVE = document.createElement("button")
    
    // todoText.className = "text"
    // todoText.innerHTML = newTodoItemText

  //   BTNBOX.className = "todo-buttons"
  //   btnDONE.className = "todo-btn done"
  //   btnDONE.innerHTML = "Done"
  //   btnREMOVE.className = "todo-btn remove"
  //   btnREMOVE.innerHTML = "Remove"

  //   newLI.append(todoText)
  //   newLI.append(BTNBOX)

  //   BTNBOX.append(btnDONE)
  //   BTNBOX.append(btnREMOVE)
  //   btnDONE.addEventListener("click",(e)=>{
  // todoText.style.textDecoration = "line-through"

  //   })

  //   btnREMOVE.addEventListener("click",()=>{
  //     todoListItems.removeChild(newLI)  
  //   })

    liHTML = `<span class="text">${newTodoItemText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    newLI.innerHTML = liHTML
    todoItemList.append(newLI)
    todoInput.value = " "
})



todoItemList.addEventListener("click",(e)=>{   //see here we have used eventDelegation.We have added the event on list but its also working on buttons
  if(e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.previousElementSibling
    liSpan.style.textDecoration = "line-through"
  }

  if(e.target.classList.contains("remove")){
    let targetedLI = e.target.parentNode.parentNode
    targetedLI.remove()
  }
})