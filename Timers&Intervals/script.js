// setTimeout, clearTimeout //
// setInterval, clearInterva
// Real use: delaying UI useActionState, auto-refresh

// setTimeout(function(){
//     console.log("hello")
// }, 5000);

// setInterval(function(){
//     console.log("hello")
// }, 5000);

// let tm = setTimeout(function () {
//     console.log("hello")
// }, 3000);

// clearTimeout(tm);

// let tm = clearInterval(function () {
//     console.log("hello")
// }, 3000);

// clearInterval(tm);


let count = 10;

let inete = setInterval(function () {
    if (count >= 1) {
        count--;
        console.log(count);
    }
    else clearInterval(inete)
}, 1000);

