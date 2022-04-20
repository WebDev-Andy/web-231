/*
===========================================
; File: Britt-sequence-game.js
; Author: Andrew Britt
; Date: 11 Apr 2022
; Description: JavaScript code for sequence game
; Reference: 
; Date reference accessed: 
===========================================
*/    
    // Input - onClick event
    // Output - back to results div
    let choice = document.getElementById("sequence").value;
    let output = document.getElementById("results");
    
    // Function and string comparison 
    function seqFunction() {
        let choice = document.getElementById("sequence").value;
    
    // Fib sequence variable
    let num1 = 0;
    let num2 = 1;
    let next;
    let fibonacciSequenceText = "";

        if("fibonacci" == choice) {
            while (num1 < 40) {
                fibonacciSequenceText += num1 + ", ";
                next = num1 + num2;
                num1 = num2;
                num2 = next;
                document.getElementById("results").innerHTML = fibonacciSequenceText; 
            }
            
        }
        if("select" == choice) {
            alert ("Invalid selection, please try again!");
        }
        else if("fibonacci" > choice) {
            output.innerHTML = "Even";
        }
        else if("fibonacci" < choice) {
            output.innerHTML = "Odd";
        }
      
    }
   