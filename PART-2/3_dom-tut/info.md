# DOM

Stands  for ***Document Object Model***.
DOM is a tree-like structure, where each node is a ***document object***.

Browser parse our html file and create an object that is called object and add this document inside window object In this Document all our html elements are stored in key value pairs.

`console.log(document)` --> we get out html file as it is.

`console.dir(document)`  --> object representation(key value pair)

`console.log(document.getElementById("main-section"))` -> gives html element 
but actually it gives document object.
to see that
`console.dir(document.getElementById("main-section"))`



> How to select html 
`document.documentElement`



| Selector  | Desc |
| --------- | --------- |
|

