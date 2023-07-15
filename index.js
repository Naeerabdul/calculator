let tex = document.getElementById("tex");

function display(num) {
    tex.value += num;
}

function Clear() {
    tex.value = ""
}
function Delete() {
    tex.value = tex.value.slice(0, -1);
}

function calc() {

    tex.value = eval(tex.value);
 
}

let sersh = document.getElementById("nam1");
let texte = document.getElementById("contaneir");
sersh.onclick = function () {
    texte.classList.toggle("whitmod");
}






// function sayHello(theName, theGender) {
//     if (theGender == "Male") {
//         console.log(`Hello Mr ${theName}`)
//     }
//     else if (theGender == "Female") {
//         console.log (`Hello Miss ${theName}`)
        
//     }
//     else {
//         console.log (`Hello ${theName}`)
//     }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Osama", "Female"); // "Hello Mr Osama"
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Osama", "Female"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"



// function checkStatus(a, b, c) {
//     if (typeOf.a === 'tring') {
//         console.log ("...............")
//     }
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



// var num = Number(0.1515) 
// var roundedString = num.toFixed(2);
// var rounded = Number(roundedString); 

// console.log(num)
// console.log(rounded)
// if (tex.value ){

// }
// // let s = '1,125';
// // s = s.split(',').join('');
// var s = '1,125';
// s = s.replace(/,/g, '1')
// console.log(s);