// localStorage, sessionStorage, and Cookies
// Tech
// localStorage API: setltem, getltem, removeitem, clear
// sessionStorage API
// storing/retrieving string vs JSON
// Basic cookie structure (manual key=value;path=.format)

// localStorage --> apka browser ka andar data store karna jo band honay ka bad bh data delete nahi hoga
// sessionStorage --> ya apka data temporarily store karta ha matlb ka tab band hoa or data gaya
// cookies --> ya bh data store karta ha and apka data browser ke cookies naam ki property ma save hota ha and ya cookie concept kam data ya light data ke liya hota ha.

// how to work a local storage?

// localStorage.directly koi bh object and arrays ko save nahi kar skty just string save kar skty ha, string ka ilawa kch bh save karny ka liya JSON.stringify ko use karna paray ga then ham isay save kar sky ga otherwise koi bh or data save nahi hoga.

// jb localStorage sa data wapas nikalty ha to string milta ha 
// string sa osay natural form ma lanay ka liya JSON.parse ka use karty ha then wo apnay natural form m ajay ga 


// localStorage.setItem("friends", ["abdal", "talha"])

// localStorage.setItem("name", JSON.stringify(["Abdal hussain", "Talha Iqbal", "Ahtasham Farhad"]))
// let fr =JSON.parse(localStorage.getItem("name")); // iski wja kar hmy array milay ga actual
// console.log(fr);

// store kasay karay - set item
// data fetch kasay karay - get item
// remove kasay karay  - removeItem
// update kasay karay  - setItem sa update kary ga which mean that ka agar property bani v hogi to os property m update kar da ga or agar nahi hoga to os name ki property laga da ga.

// localStorage.setItem("name", "Muhammad Abdal Hussain");
// let val = localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.setItem("name", "Abdal Hussain");
// localStorage.setItem("name", "Muhammad Abdal Hussain");
// localStorage.clear()

// how to work sessionStorage?

// sessionStorage.setItem("name", "Abdal");
// sessionStorage.getItem("name")

// how to work cookies
// browser mein chota data store karny ke liya cookies ka istemaal hota hai

// cookies ~4kb data store kar skty ha
// localstorage sessionstorage - ~5mb  data store kar skty ha

// document.cookie = "email=abdalhussain0317@gmail.com";


// Project 

// function setDarkOrLight() {
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         document.body.classList.add("dark");
//         document.body.classList.remove("light");
//     } else {
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// }


// const savedTheme = localStorage.getItem("theme");

// if (savedTheme === "dark" || savedTheme === "light") {
//     document.body.classList.remove("dark", "light");
//     document.body.classList.add(savedTheme);
// } else {
//     setDarkOrLight(); 
// }

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
//     if (!localStorage.getItem("theme")) {
//         setDarkOrLight(); 
//     }
// });


// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     if (document.body.classList.contains("dark")) {
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");
//         localStorage.setItem("theme", "light");
//     } else {
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//     }
// });


function setDarkOrLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
    else {
        document.body.classList.remove("light");
        document.body.classList.add("dark")
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
        setDarkOrLight();
    }
})
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(savedTheme);
}
else {
    setDarkOrLight();
}


let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light")
    }
    else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark")
    }
})
