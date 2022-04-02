/*
===========================================
; File: Britt-temp-conversion.js
; Author: Andrew Britt
; Date: 1 Apr 2022
; Description: JavaScript code to 
; convert fahrenheit to celsius.
; Reference: https://www.w3schools.com/howto/howto_js_temperature_converter.asp
; Date reference accessed: 1 Apr 2022
===========================================
*/

// The function tToC 
function tToC(conversionVal) {
    conversionVal = ((parseFloat(conversionVal) - 32) / 1.8).toFixed(2);
    document.getElementById("results").innerHTML=(conversionVal);
}