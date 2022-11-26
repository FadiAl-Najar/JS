'use strict';

// change h1 in js:
// get the element, store in a varible
// one way of getting hte element:
const h1Element = document.getElementById("pageHeading");
console.log(h1Element);

// dont used it is not security
// h1Element.innerHTML = "Testing"

// change content
h1Element.textContent = "DOM is cool";

// change styling:
h1Element.style.color = "blue";

// get element by class name
const parEls = document.getElementsByClassName("pargraph");
console.log(parEls[0]);

parEls[0].style.color = "red";

/*
 how to solve error
* where?
** what?
*** possbile causes of th error?
*/

// get the element by tag name (p)
const parElByTag = document.getElementsByTagName("p");

document.title = "BTEC Training";

const sectionEl = document.getElementById("section")

// creat an element form js:
// 1. creat the elemetn
const h2El = document.createElement("h2");
// 2. append the element to the DOM tree
sectionEl.appendChild(h2El);
// parent.appendChild("The element I want to append")

// add tilte inside h2
h2El.textContent = "Testing creating element";
h2El.style.color = "blue";

// add an image
const imageEl = document.createElement("img");
sectionEl.appendChild(imageEl);
imageEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjLbz4LdV34bhMrMoOxUIiqdec6e8zB7yqmQ&usqp=CAU"
imageEl.alt = "image for the html"
// width, hieght
imageEl.style.width = "300px"
imageEl.style.height = "300px"




