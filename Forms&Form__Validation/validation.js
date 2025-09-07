// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");


// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     document.querySelector("#emailError").textContent = "";
//     document.querySelector("#passwordError").textContent = "";
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     let emailans = emailPattern.test(email.value);
//     let passwordans = passwordPattern.test(password.value);

//     let isvalid = true;

//     if (!emailans) {
//         document.querySelector("#emailError").textContent = "Please enter a valid email address.";
//         document.querySelector("#emailError").style.display = "initial";
//         isvalid = false;
//     };

//     if (!passwordans) {
//         document.querySelector("#passwordError").textContent = "Password must be at least 8 characters long and include letters and numbers.";
//         document.querySelector("#passwordError").style.display = "initial";
//         isvalid = false;
//     };

//     if (isvalid) {
//         document.querySelector("#ressultMessage").textContent = "Everything is correct";
//     }
// });
