/*
===========================================
; File: Britt-number-game.js
; Author: Andrew Britt
; Date: 4 Apr 2022
; Description: JavaScript code
; Reference: 
; Date reference accessed: 
===========================================
*/

let output = document.getElementById("results");
let btn = document.getElementById("btnSubmit");
let myNumber = document.getElementById("txtMyNumber");
const rnd = Math.floor((Math.random() * 10) + 1);
// console.log(rnd);    <-- Code to show the random number in console

function guessNumber() {
    let myNumber = document.getElementById("txtMyNumber").value;

    if(myNumber == rnd) {
        output.innerHTML="Way to go, you're smarter than most animals!";
    }
    else if(myNumber > rnd) {
        output.innerHTML = "Nope, try lower";
    }
    else if(myNumber < rnd) {
        output.innerHTML = "Nope, go higher"
    }


}



