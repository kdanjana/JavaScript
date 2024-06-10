"use script";
/* sets or returns the document's body (the <body> element) */
const docBody = document.body;
console.log(docBody);
docBody.append("added using append method in document.body");
/* create new paragraph element */
const para = document.createElement("p");
docBody.appendChild(para);

//Change the title of the document:
document.title = "A new title";

//document.querySelector()
//Get the first <p> element:
console.log(document.querySelector("p"));
//Get the first element with class="example"
console.log(document.querySelector(".example"));
//get the first ele that has class : cl1
console.log(document.querySelector("div.cl1"));

//document.querySelectorAll()
//Select all elements with class="example":
console.log(document.querySelectorAll(".example"));
//get all divs in document
console.log(document.querySelectorAll("div"));
//get the all ele that has class : cl1
console.log(document.querySelectorAll("div.cl1"));
// NodeList(2) [div.cl1.cl2, div#divid.cl1]
// 0
// :
// div.cl1.cl2
// 1
// :
// div#divid.cl1
// length
// :
// 2
// [[Prototype]]
// :
// NodeList

//document.getElementByTagName()
// Get all elements in the document:
const collection = document.getElementsByTagName("*");
//Get all elements with the tag name "li":
const collection1 = document.getElementsByTagName("li");
//get the inner HTML of the first <p> element in the document:
const para1 = document.getElementsByTagName("p")[0].innerHTML;
console.log(para1);

//document.getElementById()
// get element by id an change ele's color
const idEle = document.getElementById("id1");
idEle.style.color = "brown";

//document.getElementByClassName()
//get all elements with class="example":
const collection3 = document.getElementsByClassName("example");
console.log(collection3);
//Get all elements with both the "example" and "color" classes:
const collection4 = document.getElementsByClassName("example color");

//document.getElementByName()
//Get all elements with the name "fname":
let elements = document.getElementsByName("fname");
document.getElementById("demo").innerHTML = elements[0].tagName;
//Number of elements with name="animal":
let num = document.getElementsByName("animal").length;

//document.createAttribute()
// Create a class attribute:
const att = document.createAttribute("class");
// Set the value of the class attribute:
att.value = "democlass";
// Add the class attribute to the first h1:
const h1 = document.getElementsByTagName("h1")[0];
h1.setAttributeNode(att);

// Create a style attribute:
const att1 = document.createAttribute("style");
// Set the value of the style attribute:
att1.value = "color:red";
// Add the style attribute to the first h1:
const h11 = document.getElementsByTagName("h1")[1];
h11.setAttributeNode(att1);

//document.createElement()
// Create a <p> element and append it to the document:
const para2 = document.createElement("p");
para2.innerText = "This is a paragraph";
document.body.appendChild(para2);

//Create a <p> element and append it to h1 element:
const para3 = document.createElement("p");
para3.innerText = "create from js";
document.getElementsByTagName("h1")[0].appendChild(para3);

// The forms property returns a collection of all <form> elements in a document.
// Number of <form> elements in the document:
// let num = document.forms.length;
// Get the id of the first <form> element:
// let id = document.forms[0].id;

//The number of <img> elements in the document:
console.log(document.images.length);
//Loop over all <img> elements, and output the URL (src) of each:
const myImages = document.images;
let text = "";
for (let i = 0; i < myImages.length; i++) {
  text += myImages[i].src + "<br>";
}
//The URL of the first <img> element is:
//console.log(document.images[0].src);

//Get the URL of the first link in the document:
let url = document.links[0].href;
document.getElementById("demo").innerHTML = url;

//creating a new ele div , adding text to div and then appending it to body
const div = document.createElement("div");
const p5 = document.createElement("p");
p5.innerText = "created new div ele and added text into it";
//div.innerText = "created new div ele and added text into it";
div.appendChild(p5);
docBody.appendChild(div);

//innerHtml
//setting the text content
const newdiv = document.createElement("div");
newdiv.innerHTML = "<h2> hello from inner html </h2>";
docBody.appendChild(newdiv);
//innerHtml
//returning the text content
let allDivs = document.getElementsByTagName("div");
console.log(allDivs); // array of all divs present in the body
let lastDiv = allDivs[allDivs.length - 1];
console.log(lastDiv);
let lastDivText = lastDiv.innerHTML;
console.log(lastDivText); // <h2> hello from inner html </h2>

//textContent
//returning the text content
const newdiv12 = document.createElement("div");
let newAtt = document.createAttribute("style");
newAtt.value = "color: red";
newdiv12.innerHTML = "<h2> somethin on display </h2>";
newdiv12.innerHTML +=
  "<h2 style='display:none;text-align: center;'> something when display is none </h2>";
newdiv12.setAttribute("style", "background-color: brown;");
docBody.appendChild(newdiv12);
console.log(newdiv12.innerText); // somethin on display
console.log(newdiv12.textContent); // somethin on display  something when display is none

//innerText
//setting the text content
const newdiv1 = document.createElement("div");
const newh2 = document.createElement("h2");
newh2.innerText = "using inner text";
newdiv1.appendChild(newh2);
docBody.appendChild(newdiv1);
//innerText
//returning the text content
lastDiv = allDivs[allDivs.length - 1];
console.log(lastDiv);
lastDivText = lastDiv.innerText;
console.log(lastDivText); // using inner text

// the innerText assignment will overwrite the innerHTML assignment.
const newdiv11 = document.createElement("div");
newdiv11.innerHTML = "<h2> hello from inner html </h2>";
newdiv11.innerText = "new div";
const p = document.createElement("p");
p.innerText = "new para";
newdiv11.appendChild(p);
docBody.appendChild(newdiv11);
lastDiv = allDivs[allDivs.length - 1];
console.log(lastDiv); // <div>new div<p>new para</p></div>

//setAttribute()
lastDiv = allDivs[allDivs.length - 1];
console.log(lastDiv); // <div>new div<p>new para</p></div>
lastDiv.setAttribute("id", "id1");
console.log(lastDiv); // <div id="id1">new div<p>new para</p></div>
lastDiv.setAttribute("id", "newid");
console.log(lastDiv); // <div id="newid">new div<p>new para</p></div>
lastDiv.setAttribute("style", "background-color: red;");
console.log(lastDiv); // <div id="newid" style="background-color: red;">new div<p>new para</p></div>
lastDiv.id = "id2";
console.log(lastDiv); // <div id="id2" style="background-color: red;">new div<p>new para</p></div>
lastDiv.id3 = "id33";
console.log(lastDiv); // no change
//getAttribute()
let id = lastDiv.getAttribute("id");
console.log(id); // newid
id = lastDiv.getAttribute("id1");
console.log(id); // null
//removeAttribute()
console.log(lastDiv); // <div id="newid" style="background-color: red;">new div<p>new para</p></div>
lastDiv.removeAttribute("id");
console.log(lastDiv); // <div style="background-color: red;">new div<p>new para</p></div>

let i = 0;
let newdivs;
let newAttr;
for (i = 0; i < 4; i++) {
  newdivs = document.createElement("div");
  newdivs.innerHTML = "<h2> from for loop </h2>";
  newdivs.setAttribute("class", "divsClass");
  newdivs.style.backgroundColor = "brown";
  newdivs.style.width = "100px";
  newdivs.style.height = "80px";
  docBody.appendChild(newdivs);
}

//element.classList
lastDiv = allDivs[allDivs.length - 1];
const lastdivs = document.getElementsByClassName("divsClass");
const newDivs = lastdivs[lastdivs.length - 1];
newDivs.removeAttribute("style");
//Assigning class cl3 to last div
newDivs.className = "cl3";
console.log(document.getElementsByClassName("cl3"));
newDivs.classList.add("a", "b", "c");
console.log(newDivs);
newDivs.classList.remove("c");
// if visible is set remove it, otherwise add it
newDivs.classList.toggle("visible");
console.log(newDivs);
newDivs.classList.replace("b", "b1");
newDivs.classList.remove("a", "b1", "visible");
