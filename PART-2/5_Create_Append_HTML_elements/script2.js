const list = document.querySelector(".list")
console.log(list);
list.insertAdjacentHTML("beforebegin","<button>beforebegin</button>")
list.insertAdjacentHTML("afterbegin","<li>afterbegin</li>")
list.insertAdjacentHTML("beforeend","<li>beforeend</li>")
list.insertAdjacentHTML("afterend","<button>afterbegin</button>")

//if there is an element which we want to append aswell as prepend also.then we can either create an new element with same content or we can clone the element and then append it
const list2 = document.querySelector(".list2")
const newli = document.createElement("li")
newli.textContent = "newli"
// list2.append(newli)  it will be wither prepend or append.In order to do both we either create an new element or we can clone it
list2.append(newli)

const newli2 = newli.cloneNode(true)
list2.prepend(newli2)