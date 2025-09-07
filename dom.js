// // The Dom
// * DOM tree structure: node, Element, text, Comment
// * selecting elements: getElementById, getelementbyclass name, querrySelector, querrySelectorall
// * Text/content access: innerText, texcontenet, innerHTML
// * Attribute manipulation: getAttribute, setAttribute, removeAttribute
// * Dynamic DOM manipulation: createElement, appendchild, remveChild, PictureInPictureWindow
// * Style updates via .style and classList (add, removeEventListener, toggle)

// // Confusion
// * Diffrent between innerText vs textcontent vs innerHTML
// * Live HTMLCollection vs static NodeList

// Mindset:
// Dom is the page is brain - use it responsibility

// dom manipulation
// html se Element select karna 
// text badlna
// html badlna
// css badlna
// attribute
// event listeners

// let hs = document.getElementById("abcd");
// hs.innerHTML= "<i>Abdal</>"
// console.dir(hs) 

// // Attributes
// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");

// let img = document.querySelector("img");
// img.setAttribute("src", "https://media.gettyimages.com/id/1461317513/photo/broken-glass.jpg?s=612x612&w=gi&k=20&c=ZsB4r8pDa4mSrQBpT4yAFMbSkbMyMm1dzbOEZxTW2DM=");

// let face = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let as = document.querySelector("a");
// as.removeAttribute("href"); 

// create element 
// append/prepend karo jaha bhi element chaiya 

// let h1 = document.createElement("h1");
// h1.textContent = "Happines is free you just need to be careful";
// // document.body.append(h1)
// document.querySelector("body").prepend(h1);

// let remov = document.querySelector("h2");
// remov.remove()

// let h = document.createElement("h2");
// h.textContent = "Hey whats going on?";
// document.querySelector("div").appendChild(h);

// * Style updates via .style and classList (add, removeEventListener, toggle)

// let h2 = document.querySelector("h2")
// // h2.style.color = "red";
// // h2.style.backgroundColor= "green";
// // h2.classList.add("ashhh");
// // h2.classList.remove("ashhh");
// h2.classList.toggle("ashhh");  // toggle mean agar class lagi v hogi  to hatta da ga or hatti v hogi to laga da ga
// console.dir(h2)