// T1: select the heading of a page by ID and change its text to "Welcome to Abdal Tech!"
// let heading = document.querySelector("#heading");
// heading.textContent = "Welcome to Abdal Tech"

// T2: select all <li> elements and print their text using a loop.

// let fruits = document.querySelectorAll("li");
// // fruits.forEach(function(val){
// //     console.log(val.textContent)
// // })

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i].textContent)
// }

// T3: when should you use textContent instead of innerText?
// Always using textContent because this is a faster content6

// T4: select a paragraph and replace its content with:
{/*<b>Updated</b> by javaScript*/}

// let pa = document.querySelector("p");
// pa.innerHTML = ("<b>Updated</b> by javaScript");


// T5: how do you get the src of an image using Javascript?

// let img = document.querySelector("img");
// // console.log(img.src)
// console.log(img.getAttribute("src"))


// T6: what does setAttribute () do?
// document.querySelector("img").setAttribute("src", "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg");




// T6: select a link and update its href to point to https:// Abdal.com.
// let a = document.querySelector("a");
// a.href = "https://www.sheryians.com";

// T7: Add a tittle attribute ti a div dynamically
// let div = document.querySelector("div");
// div.setAttribute("title", "some info") 

// T8: Remove the disabled attribute from a button.

// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// T9: what does createElement () do? what's returned?

// T10: create a new list item <li> New Task</li> and add it to the end of a <ul>
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "PineApple";
// ul.appendChild(li);

// T11:  create a new image element with a placeholder souerce and add it at the top of a div
// let img = document.createElement("img");
// img.setAttribute("src", "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png")
// img.classList.add("placeholder")
// document.querySelector("div").prepend(img)

// T12: select the first item in a list and delete it from the DOM. 
// let ul = document.querySelector("ul");
// let li = document.querySelector("li");
// li.remove(ul)


// Theory : How do you change the background color of an element?

// T13: Add a highlight class to every even item in a list.
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach(function(elem){
//     elem.classList.add("highlight")
// })

// T14: Set the font size of all <p> Elements to 18px using .style?

// let p = document.querySelectorAll("p");
// p.forEach(function(elem){
//     elem.style.color = "red"
//     elem.style.fontSize = "18px"
// })


let p = document.querySelectorAll("li");
p.forEach(function(elem){
    elem.style.color = "red"
})

let clsss = document.querySelectorAll(".ass");
clsss.forEach(function(elem){
    elem.style.color = "blue"
    elem.style.fontSize = "34px"
})