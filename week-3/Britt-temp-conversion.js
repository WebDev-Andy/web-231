/*
=================================
; File: Britt-temp-conversion.js
; Author: Andrew Britt
; Date: 1 Apr 2022
; Description: JavaScript code to 
; convert fahrenheit to celsius.
;
;
=================================
*/
// The function tToC 
function tToC(conversionVal) {
    conversionVal = ((parseFloat(conversionVal) - 32) / 1.8).toFixed(2);
    document.getElementById("results").innerHTML=(conversionVal);
}