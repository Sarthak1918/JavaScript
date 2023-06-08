let rootNode = document.getRootNode()
// console.log(rootNode)
let rootNodeChildren = rootNode.childNodes;
// console.log(rootNodeChildren);
let htmlNode = rootNode.childNodes[0];
// console.log(htmlNode);
// let htmlNodeChildren = htmlNode.childNodes;
// console.log(htmlNodeChildren);

let bodyNode = htmlNode.childNodes[3]
// console.log(bodyNode);
let divNode = bodyNode.childNodes[1];
console.log(divNode);
let h1Node = divNode.childNodes[1]
console.log(h1Node);

//suppose we want to change span element text reffering from h1Element
let spanElement = h1Node.parentElement.nextElementSibling //nextElement sibling ignores the blank text only refers to html element
spanElement.textContent = "NEW SPAN"