// Events and Events Handling 
// browser m page pr koi bh harkatkaro event raise hojay ga
// kuch screen par ho aur apko reaction dena ho tous waqt apko event handle karna ana cahiya
// event mtlb kch action hoa
// event listner ka matlb ha apne koi action ka reaction diya

// let mango = document.querySelector("h1");
// mango.addEventListener("click", function(elem){
//     mango.style.color = "red";
// })



// let para = document.querySelector("p");
// para.addEventListener("click", function () {
//     para.style.color = "green"
// });
// para.addEventListener("dblclick", function () {
//     para.style.fontSize = "67px"
// });

// REmoving event listener
// let p = document.querySelector("p");

// function abdal(){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick", abdal);
// p.removeEventListener("dblclick", abdal);


// Common Events 
// let inputt = document.querySelector("input");

// inputt.addEventListener("input", function(){
//     console.log("User Typed");
// })

// inputt.addEventListener("input", function(details){
//     if(details.data !== null){
//         console.log(details.data)
//     }
// })


//  Change,
//  change event os waqt chalta ha jb apka koi input select ya textarea m change hojay

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(dets){
//     // device.textContent ="Device Selected";
//     device.textContent = `${dets.target.value} Device Selected`;
// });


// Task 
// Approch

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(dets){
//     // h1.textContent = dets.key;
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = dets.key;
//     }
// });


// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp")

// btn.addEventListener("click", function(){
//     fileinp.click();
// })

// fileinp.addEventListener("change", function(elem){
//     // console.log(elem.target.files[0].name)
//     // btn.textContent = elem.target.files[0].name;
//     const file = elem.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// })


// submit 

// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

// profile.appendChild(img);
// card.appendChild(profile);
// card.appendChild(h3);
// card.appendChild(h5);
// card.appendChild(p);

// main.appendChild(card);

// inputs.forEach(function(inp){
//     if(inp.type !== "submit"){
//             inp.value = "";
//         }
//     })
// });


// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (elem) {
//     elem.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profile.appendChild(img);
//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);
//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit"){
//             inp.value = "";
//         }
//     })
// })

// Mouseover and mousemove

// let genius = document.querySelector("#genius");

// genius.addEventListener("mouseover", function(){
//     genius.style.backgroundColor = "yellow";
// })

// genius.addEventListener("mouseout", function(){
//     genius.style.backgroundColor = "red";
// })


// mousemove
// let genius = document.querySelector("#genius");

// window.addEventListener("mousemove", function(dets){
//     genius.style.top = dets.clientY + "px";
//     genius.style.left = dets.clientX + "px";
// })


// "keyup" khud sa parhna ha

// Event Object

// Event Bubbling
//  jisma event ayga agar osma listener nahi hoa to hamara event us ka parent pr listner dhunday ga or asay karty karty opar ki traf move karay ga

// document.querySelector("#nav").addEventListener("click", function(){
//     alert("clicked");
// });


// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dets){
//     // dets.target.style.textDecoration = "line-through";
// })


// let ul = document.querySelector("ul");

// ul.addEventListener("click", function(dets){
//     dets.target.classList.toggle("lt")
// })


// Event Capturing
// jb bh ap click krte ho ya koi bhi event raise karte ho to apka jo event flow doo phases mein chalta ha:

// phase 1 : event top level element sa neeche ki traf ayga // event capturing kahty ha
// phase 2 : event raised element se parent ki traf jayga // event bubbling kahty ha
// aur pehly phase 1 he pehly hoti ha but wo by default off rahti ha, agar ham osay on kar da to pehly phase 1 ka answer milay ga
// capture phase chalany ka liya hm function ka karli bracket ka bd comma laga kar true likh da ga

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.log("Button Clicked")
// })

// c.addEventListener("click", function () {
//     console.log("c Clicked")
// })

// b.addEventListener("click", function () {
//     console.log("b Clicked")
// })

// a.addEventListener("click", function () {
//     console.log("a Clicked")
// }, true)


