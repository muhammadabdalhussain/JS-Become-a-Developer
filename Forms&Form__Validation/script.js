// Forms and form validation 
// Tech 
// * Reading Values from input, texarea, select 
// Prevent default submission 
// inline and JS-based validation 
// Showing error messages conditionally 
// Pattern attribute vs custom regex 

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     if (nm.value.length <= 2) {
//         document.querySelector("#hide").style.display = "initial";
//     }
//     else {
//         document.querySelector("#hide").style.display = "none";
//     }
// });

// let nm = document.querySelector("#name");
// let form = document.querySelector("form");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();
//     const regex = /^[a-zA-Z0-9._-]{3,16}$/;
//     let ans = regex.test("abdalhussain0317@gmail_com");
//     console.log(ans)
// });