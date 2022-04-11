/*
===========================================
; File: Britt-number-game.js
; Author: Andrew Britt
; Date: 4 Apr 2022
; Description: JavaScript code for assignment 4
; Reference: https://www.youtube.com/watch?v=gPbpGWFl8mQ&t=622s
; Date reference accessed: 6 April 2022
===========================================
*/

let output = document.getElementById("results");
let btn = document.getElementById("btnSubmit");
let myNumber = document.getElementById("txtMyNumber");
const rnd = Math.floor((Math.random() * 10) + 1);
// console.log(rnd);    <-- Code to show the random number in console to check that it is working.

function guessNumber() {
    let myNumber = document.getElementById("txtMyNumber").value;

    if(myNumber == rnd) {
        output.innerHTML="Congratulations! You picked the correct number!";
    }
    else if(myNumber > rnd) {
        output.innerHTML = "The number is less than " + myNumber;
    }
    else if(myNumber < rnd) {
        output.innerHTML = "The number is greater than " + myNumber;
    }


}



